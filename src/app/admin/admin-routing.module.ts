import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPlaceEditComponent } from './pages/admin-place-edit/admin-place-edit.component';
import { AdminPlacesComponent } from './pages/admin-places/admin-places.component';
import { AdminProjectEditComponent } from './pages/admin-project-edit/admin-project-edit.component';
import { AdminProjectPhotoComponent } from './pages/admin-project-photo/admin-project-photo.component';
import { AdminProjectsComponent } from './pages/admin-projects/admin-projects.component';
import { AdminRegionEditComponent } from './pages/admin-region-edit/admin-region-edit.component';
import { AdminRegionsComponent } from './pages/admin-regions/admin-regions.component';
import { AdminWrapComponent } from './pages/admin-wrap/admin-wrap.component';


const routes: Routes = [
  { path: '', redirectTo: 'regions', pathMatch: 'full' },
  {
    path: 'regions', component: AdminWrapComponent, children: [
      { path: '', component: AdminRegionsComponent, pathMatch: 'full' },
      { path: ':regionId', component: AdminRegionEditComponent },
      { path: ':regionId/places', component: AdminPlacesComponent },
      { path: ':regionId/places/:placeId', component: AdminPlaceEditComponent },
      { path: ':regionId/places/:placeId/projects', component: AdminProjectsComponent },
      { path: ':regionId/places/:placeId/projects/:projectId', component: AdminProjectEditComponent },
      { path: ':regionId/places/:placeId/projects/:projectId/:time', component: AdminProjectPhotoComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
