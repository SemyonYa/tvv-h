import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Image } from 'src/models/image';
import { Place } from 'src/models/place';
import { Region } from 'src/models/region';
import { FormState, State } from '../form-state/form-state.component';

@Component({
  selector: 'app-place-form',
  templateUrl: './place-form.component.html',
  styleUrls: ['./place-form.component.scss']
})
export class PlaceFormComponent implements OnInit {
  private _place: Place
  private _regionId?: number;
  @Input() regions: Region[]
  @Input() set place(value: Place) {
    this._place = value;
    this.generateForm();
  };
  get place(): Place {
    return this._place;
  }
  @Input() formState: FormState;
  @Input() set regionId(value: number) {
    this._regionId = value;
    this.generateForm();
  }

  @Output() onSubmit = new EventEmitter<Partial<Place>>();

  State = State;
  form: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.generateForm();
  }

  generateForm(): void {
    console.log(this._place);

    this.form = new FormGroup({
      id: new FormControl(this._place?.id),
      name: new FormControl(this._place?.name ?? '', [Validators.required, Validators.maxLength(100)]),
      brief: new FormControl(this._place?.brief, [Validators.maxLength(300)]),
      description: new FormControl(this._place?.description, [Validators.required]),
      regionId: new FormControl(this._place?.regionId ?? this._regionId, [Validators.required]),
      imageId: new FormControl(this._place?.image?.id, [Validators.required]),
    });

    console.log(this.form);

  }

  onImageSelected(image: Image) {
    this.form.patchValue({ imageId: image.id })
  }

  submit() {
    this.form.value.region_id = this.form.value.regionId;
    this.form.value.image_id = this.form.value.imageId;
    this.onSubmit.emit(this.form.value)
  }

}
