import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'form-state',
  templateUrl: './form-state.component.html',
  styleUrls: ['./form-state.component.scss']
})
export class FormStateComponent implements OnInit {
  @Input() formState: FormState;
  State = State;
  constructor() { }

  ngOnInit(): void {
  }

}

export interface FormState {
  state: State;
  msg?: string;
}

export enum State {
  Initial,
  InProgress,
  Success,
  Error,
}