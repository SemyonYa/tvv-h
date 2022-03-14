import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { titleAnimation } from 'src/animations/title.animation';
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
  form: FormGroup;
  formState: FormState = { state: State.Initial };
  State = State;

  constructor(
    private data: DataService,
    private projectRest: ProjectRestService,
    private router: Router,
  ) { }

  item$: Observable<any> = this.data.dataItem()
    .pipe(
      tap(_item => {
        console.log(_item);
        this.form = new FormGroup({
          name: new FormControl(_item.name, [Validators.required, Validators.maxLength(100)]),
          brief: new FormControl(_item.brief, [Validators.maxLength(300)]),
          description: new FormControl(_item.description, [Validators.required]),
          people: new FormControl('people', [Validators.required, Validators.maxLength(50)]),
          calendar: new FormControl('calendar', [Validators.required, Validators.maxLength(50)]),
          costs: new FormControl(0, [Validators.required, Validators.max(10000000)]),
        });
      })
    );

  submit() {
    this.formState = { state: State.InProgress };
    console.log(this.form.value);

    setTimeout(() => {
      this.formState = { state: State.Success, msg: 'SUCCESS' };

      setTimeout(() => {
        this.router.navigate(['admin']);
      }, 1000);
    }, 2000);
  }
}
