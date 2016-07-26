import { Component } from '@angular/core';
import * as _ from 'underscore';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `<h1>{{title}}</h1>`,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Underscore: '+ _.reduce;
}