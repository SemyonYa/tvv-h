import { Component, ComponentRef, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { titleAnimation } from 'src/animations/title.animation';
import { GaleryModalComponent } from 'src/app/components/galery-modal/galery-modal.component';
import { Image } from 'src/models/image';

import SwiperCore, { SwiperOptions, Navigation, Pagination } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Navigation, Pagination]);


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  animations: [titleAnimation]
})
export class ProjectComponent implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 12,
    navigation: true,
    pagination: { clickable: true, dynamicBullets: true },
    scrollbar: { draggable: true },
  };
  images: Image[] = [1, 2, 3, 4, 5, 6, 7]
    .map(i => ({ id: i, thumb: `/assets/fake/category${i}.jpg`, wide: `/assets/fake/category${i}.jpg` }));

  constructor(
    private vcRef: ViewContainerRef
  ) { }

  @ViewChild('swiperRef', { static: false }) swiperElem: SwiperComponent;
  galeryModalRef: ComponentRef<GaleryModalComponent>;

  ngOnInit(): void {
  }

  goToFullScreen() {
    const activeIndex = this.swiperElem.swiperRef.activeIndex;
    console.log(this.swiperElem.swiperRef.activeIndex);

    this.galeryModalRef = this.vcRef.createComponent(GaleryModalComponent);
    this.galeryModalRef.instance.images = this.images;
    // this.galeryModalRef.instance.activeIndex = activeIndex;
    this.galeryModalRef.instance.onClose = this.slideTo
    this.galeryModalRef.instance.config.initialSlide = activeIndex
  }

  slideTo = (index: number) => {
    this.galeryModalRef.destroy();
    this.swiperElem.swiperRef.slideTo(index, 600);
  }

}
