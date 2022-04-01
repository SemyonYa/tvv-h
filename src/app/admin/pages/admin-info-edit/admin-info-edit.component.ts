import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, take, tap } from 'rxjs';
import { titleAnimation } from 'src/animations/title.animation';
import { Item } from 'src/models/item';
import { ItemRestService } from 'src/services/rest/item.rest.service';
import { FormState, State } from '../../components/form-state/form-state.component';

@Component({
  selector: 'app-admin-info-edit',
  templateUrl: './admin-info-edit.component.html',
  styleUrls: ['./admin-info-edit.component.scss'],
  animations: [titleAnimation],
})
export class AdminInfoEditComponent {
  form: FormGroup;
  formState: FormState = { state: State.Initial };
  State = State;

  constructor(
    private itemRest: ItemRestService,
  ) { }

  item$: Observable<Item> = this.itemRest.getOne(1)
    .pipe(
      tap(_item => {
        this.form = new FormGroup({
          name: new FormControl(_item.name, [Validators.required])
        })
      })
    );

  submit() {
    this.formState = { state: State.InProgress };
    this.itemRest.put(this.form.value, 1)
      .pipe(
        take(1),
      )
      .subscribe({
        next: _item => {
          this.formState = { state: State.Success, msg: 'Успешно обновлено.' };

          // setTimeout(() => {
          //   this.router.navigate(['admin', 'regions', formValue.regionId, 'places']);
          // }, 3000);
        },
        error: err => {
          this.formState = { state: State.Error, msg: err?.['message'] };
        }
      });
  }

}
