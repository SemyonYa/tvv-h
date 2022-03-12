import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPlacesComponent } from './pages/admin-places/admin-places.component';
import { AdminProjectEditComponent } from './pages/admin-project-edit/admin-project-edit.component';
import { AdminProjectsComponent } from './pages/admin-projects/admin-projects.component';
import { AdminRegionsComponent } from './pages/admin-regions/admin-regions.component';
import { AdminWrapComponent } from './pages/admin-wrap/admin-wrap.component';


const routes: Routes = [
  { path: '', redirectTo: 'regions', pathMatch: 'full' },
  {
    path: 'regions', component: AdminWrapComponent, pathMatch: 'full', children: [
      { path: 'regions', component: AdminRegionsComponent },
      { path: 'regions/:regionId/places', component: AdminPlacesComponent },
      { path: 'regions/:regionId/places/:placeId/projects', component: AdminProjectsComponent },
      { path: 'regions/:regionId/places/:placeId/projects/:projectId', component: AdminProjectEditComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
