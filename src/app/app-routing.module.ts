import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlaceComponent } from './pages/place/place.component';
import { ProjectComponent } from './pages/project/project.component';
import { RegionComponent } from './pages/region/region.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'region/:regionId', component: RegionComponent },
  { path: 'place/:placeId', component: PlaceComponent },
  { path: 'project/:projectId', component: ProjectComponent },

  { path: 'search', component: SearchComponent, outlet: 'search' },

  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
