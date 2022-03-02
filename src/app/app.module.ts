import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegionPopupComponent } from './components/region-popup/region-popup.component';
import { PlaceComponent } from './pages/place/place.component';
import { ProjectComponent } from './pages/project/project.component';
import { HelloComponent } from './components/hello/hello.component';
import { RegionComponent } from './pages/region/region.component';
import { HomeComponent } from './pages/home/home.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    AppComponent,
    RegionPopupComponent,
    PlaceComponent,
    ProjectComponent,
    HelloComponent,
    RegionComponent,
    HomeComponent,
    BreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
