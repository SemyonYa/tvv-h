import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Item } from 'src/models/item';
import { Place } from 'src/models/place';
import { Project } from 'src/models/project';
import { FormState, State } from '../form-state/form-state.component';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectFormComponent implements OnChanges {
  @Input() placeId: number;
  @Input() places: Place[]
  @Input() projectTypes: Item[];
  @Input() project: Project;
  @Input() formState: FormState;

  @Output() onSubmit = new EventEmitter<Partial<Project>>();

  State = State;
  form: FormGroup;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if ('places' in changes || 'projectTypes' in changes)
      this.generateForm();
  }

  generateForm(): void {
    this.form = new FormGroup({
      id: new FormControl(this.project?.id),
      name: new FormControl(this.project?.name, [Validators.required, Validators.maxLength(100)]),
      placeId: new FormControl(this.project?.placeId ?? this.placeId, [Validators.required]),
      projectTypeId: new FormControl(this.project?.projectTypeId, [Validators.required]),
      brief: new FormControl(this.project?.brief, [Validators.required, Validators.maxLength(300)]),
      description: new FormControl(this.project?.description, [Validators.required]),
      people: new FormControl(this.project?.people, [Validators.required, Validators.maxLength(50)]),
      calendar: new FormControl(this.project?.calendar, [Validators.required, Validators.maxLength(50)]),
      costs: new FormControl(this.project?.costs, [Validators.required, Validators.max(10000000)]),
    });

  }

  submit() {
    this.form.value.place_id = this.form.value.placeId;
    this.form.value.project_type_id = this.form.value.projectTypeId;
    this.onSubmit.emit(this.form.value)
  }
}
