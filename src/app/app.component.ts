import { style } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root', //component directive
  templateUrl: './app.component.html',
  // template:'<h1>helloworld</h1>',
  styleUrls: ['./app.component.scss']
  // styles:['h1{color:red}'],
})
export class AppComponent {
  title = 'courseDemo';
  sayhello():string{
    return `helloworld, ${this.title}`
  }
}
