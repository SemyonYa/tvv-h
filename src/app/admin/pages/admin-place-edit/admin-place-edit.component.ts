import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, share, switchMap, take, tap } from 'rxjs';
import { titleAnimation } from 'src/animations/title.animation';
import { Image } from 'src/models/image';
import { Place } from 'src/models/place';
import { Region } from 'src/models/region';
import { DataService } from 'src/services/data.service';
import { PlaceRestService } from 'src/services/rest/place.rest.service';
import { FormState, State } from '../../components/form-state/form-state.component';

@Component({
  selector: 'app-admin-place-edit',
  templateUrl: './admin-place-edit.component.html',
  styleUrls: ['./admin-place-edit.component.scss'],
  animations: [titleAnimation],
})
export class AdminPlaceEditComponent {
  // form: FormGroup;
  formState: FormState = { state: State.Initial };
  State = State;

  constructor(
    private data: DataService,
    private placeRest: PlaceRestService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  private _regions$: Observable<Region[]> = this.data.getRegions()
    .pipe(
      share()
    );
  regions$ = this._regions$;

  item$: Observable<Place> = this.activatedRoute.params
    .pipe(
      switchMap(_params => this.placeRest.getOne(+_params['placeId'])
        // .pipe(
        //   tap(_item => {
        //     console.log(_item);
        //     this.form = new FormGroup({
        //       id: new FormControl(_item.id),
        //       name: new FormControl(_item.name, [Validators.required, Validators.maxLength(100)]),
        //       brief: new FormControl(_item.brief, [Validators.maxLength(300)]),
        //       description: new FormControl(_item.description, [Validators.required]),
        //       regionId: new FormControl(_item.regionId, [Validators.required]),
        //       imageId: new FormControl(_item.imageId, [Validators.required]),
        //     });
        //   })
        // )
      ),
    )


  // onImageSelected(image: Image) {
  //   this.form.patchValue({ imageId: image.id })
  // }

  submit(formValue: Partial<Place>) {
    this.formState = { state: State.InProgress };
    // console.log(this.form.value);
    // this.form.value.region_id = this.form.value.regionId;
    // this.form.value.image_id = this.form.value.imageId;
    this.placeRest.put(formValue, formValue.id)
      .pipe(
        take(1),
      )
      .subscribe({
        next: _item => {
          this.formState = { state: State.Success, msg: 'Успешно обновлено.' };

          setTimeout(() => {
            this.router.navigate(['admin', 'regions', formValue.regionId, 'places']);
          }, 3000);
        },
        error: err => {
          this.formState = { state: State.Error, msg: err?.['message'] };
        }
      });
  }

}
