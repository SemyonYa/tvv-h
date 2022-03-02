import { Component, ComponentRef, ViewContainerRef } from '@angular/core';
import { RegionPopupComponent } from 'src/app/components/region-popup/region-popup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(
    private vcRef: ViewContainerRef
  ) { }

  activeComponentRef: ComponentRef<any>

  mapClick(e: MouseEvent) {
    const parent = (e.target as SVGElement).parentNode as SVGElement;
    if (parent.classList.contains('group')) {
      this.closePopup();

      const name = parent.dataset['id'];

      this.activeComponentRef = this.vcRef.createComponent(RegionPopupComponent);
      this.activeComponentRef.instance.name = name;
      this.activeComponentRef.instance.x = e.clientX;
      this.activeComponentRef.instance.y = e.clientY;
      this.activeComponentRef.instance.close = this.closePopup;
    }
  }

  closePopup = (): void => {
    if (this.activeComponentRef) {
      this.activeComponentRef.destroy();
      this.activeComponentRef = null;
    }
  }
}
