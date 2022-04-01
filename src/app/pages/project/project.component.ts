import { Component, ComponentRef, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { titleAnimation } from 'src/animations/title.animation';
import { GaleryModalComponent } from 'src/app/components/galery-modal/galery-modal.component';
import { Image } from 'src/models/image';
import { Project } from 'src/models/project';
import { DataService } from 'src/services/data.service';

import SwiperCore, { SwiperOptions, Navigation, Pagination } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Navigation, Pagination]);


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  animations: [titleAnimation]
})
export class ProjectComponent {
  isAfter: boolean = false;
  galeryModalRef: ComponentRef<GaleryModalComponent>;

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 12,
    navigation: true,
    pagination: { clickable: true, dynamicBullets: true },
    scrollbar: { draggable: true },
  };
  // TODO: DELETE
  images: Image[] = [1, 2, 3, 4, 5, 6, 7]
    .map(i => ({ id: i, thumb: `/assets/fake/category${i}.jpg`, medium: '', large: `/assets/fake/category${i}.jpg` }));

  constructor(
    private vcRef: ViewContainerRef,
    private activatefRoute: ActivatedRoute,
    private data: DataService,
  ) { }

  @ViewChild('swiperRef', { static: false }) swiperElem: SwiperComponent;

  project$: Observable<Project> = this.activatefRoute.params
    .pipe(
      switchMap(_params => this.data.getProject(_params['projectId'])),
    );


  goToFullScreen(images: Image[]) {
    const activeIndex = this.swiperElem.swiperRef.activeIndex;

    this.galeryModalRef = this.vcRef.createComponent(GaleryModalComponent);
    this.galeryModalRef.instance.images = images;
    this.galeryModalRef.instance.onClose = this.slideTo
    this.galeryModalRef.instance.config.initialSlide = activeIndex
  }

  slideTo = (index: number) => {
    this.galeryModalRef.destroy();
    this.swiperElem.swiperRef.slideTo(index, 600);
  }

  toggleIsAfter(value: boolean) {
    this.isAfter = value;
  }

}
