import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { titleAnimation } from 'src/animations/title.animation';
import { Image } from 'src/models/image';
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
  form: FormGroup;
  formState: FormState = { state: State.Initial };
  State = State;

  constructor(
    private data: DataService,
    private placeRest: PlaceRestService,
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
          regionId: new FormControl(null, [Validators.required]),
          imageId: new FormControl(null, [Validators.required]),
        });
      })
    );

  regions$: Observable<any[]> = this.data.data();

  onImageSelected(image: Image) {
    this.form.patchValue({ imageId: image.id })
  }

  submit() {
    this.formState = { state: State.InProgress };
    console.log(this.form.value);

    setTimeout(() => {
      this.formState = { state: State.Success, msg: 'SUCCESS' };

      setTimeout(() => {
        this.router.navigate(['admin', 'regions', '[RegionId]', 'places']);
      }, 1000);
    }, 2000);
  }

}
