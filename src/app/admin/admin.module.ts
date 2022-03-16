import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRegionsComponent } from './pages/admin-regions/admin-regions.component';
import { AdminPlacesComponent } from './pages/admin-places/admin-places.component';
import { AdminProjectsComponent } from './pages/admin-projects/admin-projects.component';
import { AdminProjectEditComponent } from './pages/admin-project-edit/admin-project-edit.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminPlaceEditComponent } from './pages/admin-place-edit/admin-place-edit.component';
import { AdminRegionEditComponent } from './pages/admin-region-edit/admin-region-edit.component';
import { AdminWrapComponent } from './pages/admin-wrap/admin-wrap.component';
import { AdminProjectPhotoComponent } from './pages/admin-project-photo/admin-project-photo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InProgressComponent } from './components/in-progress/in-progress.component';
import { FormStateComponent } from './components/form-state/form-state.component';
import { FileInputComponent } from './components/file-input/file-input.component';
import { CollapsibleComponent } from './components/collapsible/collapsible.component';
import { AdminInfoEditComponent } from './pages/admin-info-edit/admin-info-edit.component';
import { AdminPlaceAddComponent } from './pages/admin-place-add/admin-place-add.component';
import { PlaceFormComponent } from './components/place-form/place-form.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { AdminProjectAddComponent } from './pages/admin-project-add/admin-project-add.component';



@NgModule({
  declarations: [
    AdminProjectEditComponent,
    AdminProjectPhotoComponent,
    AdminProjectsComponent,
    AdminPlaceEditComponent,
    AdminPlacesComponent,
    AdminRegionEditComponent,
    AdminRegionsComponent,
    AdminWrapComponent,

    CollapsibleComponent,
    ConfirmComponent,
    FileInputComponent,
    FormStateComponent,
    InProgressComponent,
    AdminInfoEditComponent,
    AdminPlaceAddComponent,
    PlaceFormComponent,
    ProjectFormComponent,
    AdminProjectAddComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
