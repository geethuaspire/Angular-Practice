import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello-en',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloEnComponent  {
  @Input() name!: string;
}

@Component({
  selector: 'hello-tw',
  template: `<h1>哈囉 {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloTwComponent  {
  @Input() name!: string;
}
