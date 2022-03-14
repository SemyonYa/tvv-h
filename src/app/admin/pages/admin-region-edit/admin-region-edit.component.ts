import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { titleAnimation } from 'src/animations/title.animation';
import { DataService } from 'src/services/data.service';
import { RegionRestService } from 'src/services/rest/region.rest.service';
import { FormState, State } from '../../components/form-state/form-state.component';

@Component({
  selector: 'app-admin-region-edit',
  templateUrl: './admin-region-edit.component.html',
  styleUrls: ['./admin-region-edit.component.scss'],
  animations: [titleAnimation]
})
export class AdminRegionEditComponent {
  form: FormGroup;
  formState: FormState = { state: State.Initial };
  State = State;

  constructor(
    private data: DataService,
    private regionRest: RegionRestService,
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
