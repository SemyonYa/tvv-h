import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { pageAnimation } from 'src/animations/page.animation';
import { Image } from 'src/models/image';

import SwiperCore, { SwiperOptions, Navigation, Pagination } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-galery-modal',
  templateUrl: './galery-modal.component.html',
  styleUrls: ['./galery-modal.component.scss'],
  animations: [pageAnimation]
})
export class GaleryModalComponent {
  config: SwiperOptions = {
    slidesPerView: 1,
    // spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true, dynamicBullets: true },
    scrollbar: { draggable: true },
  };

  @ViewChild('swiperRef', { static: false }) swiperElem: SwiperComponent;

  images: Image[];
  activeIndex: number;
  onClose: (id: number) => void;

  close() {
    this.onClose(this.swiperElem.swiperRef.activeIndex);
  }
}
