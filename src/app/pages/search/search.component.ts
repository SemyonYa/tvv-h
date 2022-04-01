import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, debounceTime, fromEvent, Observable, of, switchMap, tap } from 'rxjs';
import { libraryAnimation } from 'src/animations/library.animation';
import { pageAnimation } from 'src/animations/page.animation';
import { FormState, State } from 'src/app/admin/components/form-state/form-state.component';
import { SearchResponse } from 'src/models/search-response';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [libraryAnimation, pageAnimation]
})
export class SearchComponent implements OnInit {
  formState: FormState = { state: State.Initial };
  State = State;
  @ViewChild('search', { static: true }) searchElem: ElementRef<HTMLInputElement>;

  constructor(
    private data: DataService,
    private rotuer: Router,
  ) { }

  result$: Observable<SearchResponse>;

  ngOnInit(): void {
    this.result$ = fromEvent<InputEvent>(this.searchElem.nativeElement, 'input')
      .pipe(
        debounceTime(300),
        switchMap(e => {
          this.formState = { state: State.InProgress };
          const value = (e.target as HTMLInputElement).value.trim().toLowerCase();
          return value?.length >= 2
            ? this.data.search(value)
              .pipe(
                tap(() => {
                  this.formState = { state: State.Success, msg: 'Результаты поиска:' }
                })
              )
            : of(null)
              .pipe(
                tap(() => {
                  this.formState = { state: State.Initial }
                })
              )
        }),
        catchError(err => {
          console.log('SEARCH ERROR', err);
          this.formState = { state: State.Error, msg: err.message }
          return of({ places: [], projects: [] } as SearchResponse)
        }),
      )
  }

  goTo(route: string) {
    this.rotuer.navigate([{ outlets: { primary: route, search: null } }]);
  }

  close() {
    this.rotuer.navigate([{ outlets: { search: null } }]);
  }
}
