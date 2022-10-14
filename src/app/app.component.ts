import { Component, ComponentFactoryResolver, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { HelloEnComponent, HelloTwComponent } from './hello.component';
import { DynamicComponentDirective } from './dynamic_component.directive';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  name = 'Angular 4';
  @ViewChild(DynamicComponentDirective) dynamicHost!: DynamicComponentDirective;
  dynamicComponent: any;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    this.dynamicComponent = HelloTwComponent;
  }

  ngAfterViewInit() {
    this.loadComponent();
    this.switch();
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }
  loadComponent() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.dynamicComponent);

    this.dynamicHost.viewContainerRef.clear();
    this.dynamicHost.viewContainerRef.createComponent(componentFactory);
  }
  switch() {
    this.interval = setInterval(() => {
      if (this.dynamicComponent.name === 'HelloTwComponent') {
        this.dynamicComponent = HelloEnComponent;
      } else {
        this.dynamicComponent = HelloTwComponent;
      }
      this.loadComponent();
    }, 1000);
  }
}
