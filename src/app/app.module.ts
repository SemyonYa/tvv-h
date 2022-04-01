import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaceComponent } from './pages/place/place.component';
import { ProjectComponent } from './pages/project/project.component';
import { RegionComponent } from './pages/region/region.component';
import { HomeComponent } from './pages/home/home.component';
import { GaleryModalComponent } from './components/galery-modal/galery-modal.component';
import { InProgressComponent } from './components/in-progress/in-progress.component';
import { SearchComponent } from './pages/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlaceComponent,
    ProjectComponent,
    RegionComponent,

    GaleryModalComponent,
    InProgressComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SwiperModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
