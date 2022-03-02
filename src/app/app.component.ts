import { Component, ComponentRef, ViewContainerRef } from '@angular/core';
import { HelloComponent } from './components/hello/hello.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tvv-hospital_ver';
  helloComponentRef: ComponentRef<HelloComponent>;

  constructor(
    private vcRef: ViewContainerRef
  ) { }

  showHello() {
    this.helloComponentRef = this.vcRef.createComponent(HelloComponent);
    this.helloComponentRef.instance.close = this.hideHello;

  }

  hideHello = (): void => {
    this.helloComponentRef?.destroy();
  }
}
