import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { catchError, map, Observable, of, share, switchMap, take, tap, throwError } from 'rxjs';
import { libraryAnimation } from 'src/animations/library.animation';
import { Image } from 'src/models/image';
import { ImageRestService } from 'src/services/rest/image.rest.service';

@Component({
  selector: 'file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss'],
  animations: [libraryAnimation]
})
export class FileInputComponent implements OnInit {
  private fileNames: string;
  libraryShown: boolean = false;
  selectedImage: Image;
  error: string;

  // @Input() image: Image;

  @Input() imageId: number;
  @Input() imageName: string;
  @Input() showImageOnSelect: boolean = true;
  @Output() onSelect = new EventEmitter<Image>();

  constructor(
    private imageRest: ImageRestService,
  ) { }

  private _images$: Observable<Image[]> = this.imageRest.getAll()
    .pipe(
      tap(x => console.log('1', x)),
      map(_items => _items?.sort((i1, i2) => i2.id - i1.id)),
      share(),
      catchError((err) => {
        console.log(err);
        this.error = err.message;
        // return throwError(() => err);
        return of([]);
      }),
    );
  images$: Observable<Image[]> = this._images$;



  ngOnInit(): void {
    if (this.imageId && this.imageName)
      this.selectedImage = { id: this.imageId, thumb: this.imageName } as Image;

    // this.images$.subscribe(
    //   {
    //     next: _v => console.log(_v),
    //     error: err => console.log(err),
    //     complete: () => console.log('COMPLETE'),
    //   }
    // );
  }

  onChange(e: Event) {
    const selectedFiles: File[] = Array.from((e.target as HTMLInputElement).files);

    let formData = new FormData();
    for (let index = 0; index < selectedFiles.length; index++) {
      formData.append(`files[]`, selectedFiles[index], `file${selectedFiles[index].name}`);
    }

    this._images$ = this.imageRest.upload(formData)
      .pipe(
        tap(_items => {
          // console.log(_items);

          if (this.showImageOnSelect)
            this.selectedImage = _items?.[0];
          this.onSelect.emit(this.selectedImage);
        }),
        switchMap(_items => this.imageRest.getAll()
          .pipe(
            map(_items => _items?.sort((i1, i2) => i2.id - i1.id)),
            share()
          )
        ),
        catchError((err) => {
          this.error = err.message;
          console.log(err);

          return of([]);
        }),
      );
  }

  // closeUploaded() {
  //   this.images = null;
  // }

  fetch(): void {
    this._images$ = this.imageRest.getAll()
      .pipe(
        map(_items => _items?.sort((i1, i2) => i2.id - i1.id)),
        share()
      );
  }

  showLibrary() {
    this.libraryShown = true;
    // this.images$.subscribe(
    //   {
    //     next: _v => console.log('on show', _v),
    //     error: err => console.log('on show', err),
    //     complete: () => console.log('on show', 'COMPLETE'),
    //   }
    // );
  }

  hideLibrary() {
    this.libraryShown = false;
  }

  selectImage(image: Image) {
    if (this.showImageOnSelect)
      this.selectedImage = image;
    this.onSelect.emit(image);
    this.hideLibrary();
  }
}