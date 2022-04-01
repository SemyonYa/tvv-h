import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { titleAnimation } from 'src/animations/title.animation';
import { Item } from 'src/models/item';
import { Place } from 'src/models/place';
import { Project } from 'src/models/project';
import { DataService } from 'src/services/data.service';
import { ProjectRestService } from 'src/services/rest/project.rest.service';
import { FormState, State } from '../../components/form-state/form-state.component';

@Component({
  selector: 'app-admin-project-edit',
  templateUrl: './admin-project-edit.component.html',
  styleUrls: ['./admin-project-edit.component.scss'],
  animations: [titleAnimation]
})
export class AdminProjectEditComponent {
  // form: FormGroup;
  formState: FormState = { state: State.Initial };
  State = State;

  constructor(
    private data: DataService,
    private projectRest: ProjectRestService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }
  private _params = this.activatedRoute.params;
  item$: Observable<any> = this._params
    .pipe(
      switchMap(_params => this.projectRest.getOne(+_params['projectId'])),
    );
  places$: Observable<Place[]> = this._params
    .pipe(
      switchMap(_params => this.data.getPlaces(+_params['regionId'])),
    );
  projectTypes$: Observable<Item[]> = this.data.getProjectTypes();
  // .pipe(
  //   tap(_item => {
  //     console.log(_item);
  //     this.form = new FormGroup({
  //       name: new FormControl(_item.name, [Validators.required, Validators.maxLength(100)]),
  //       brief: new FormControl(_item.brief, [Validators.maxLength(300)]),
  //       description: new FormControl(_item.description, [Validators.required]),
  //       people: new FormControl('people', [Validators.required, Validators.maxLength(50)]),
  //       calendar: new FormControl('calendar', [Validators.required, Validators.maxLength(50)]),
  //       costs: new FormControl(0, [Validators.required, Validators.max(10000000)]),
  //     });
  //   })
  // );

  submit(formValue: Partial<Project>) {
    this.formState = { state: State.InProgress };
    console.log(formValue);

    this.projectRest.put(formValue, formValue.id)
      .pipe()
      .subscribe({
        next: _item => {
          this.formState = { state: State.Success, msg: 'Успешно обновлено.' };

          setTimeout(() => {
            this.router.navigate(['/admin', 'regions', this.activatedRoute.snapshot.params['regionId'], 'places', formValue.placeId, 'projects']);
          }, 3000);
        },
        error: err => {
          this.formState = { state: State.Error, msg: err?.['message'] };
        }
      });
  }
}
