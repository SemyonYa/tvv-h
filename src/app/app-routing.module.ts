import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlaceComponent } from './pages/place/place.component';
import { ProjectComponent } from './pages/project/project.component';
import { RegionComponent } from './pages/region/region.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'region', component: RegionComponent },
  { path: 'place', component: PlaceComponent },
  { path: 'project', component: ProjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
