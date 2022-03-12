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



@NgModule({
  declarations: [
    AdminRegionsComponent,
    AdminPlacesComponent,
    AdminProjectsComponent,
    AdminProjectEditComponent,
    AdminPlaceEditComponent,
    AdminRegionEditComponent,

    ConfirmComponent,
     AdminWrapComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
