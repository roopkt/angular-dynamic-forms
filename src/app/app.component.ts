import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
  <div class="app">
    <dynamic-form [config]="config"
    (submitted) ="formSubmitted($event)">
    </dynamic-form>
  </div>
  `
})
export class AppComponent {
  config = [
    {
      type:'input',
      label:'Full name',
      name:'name',
      placeholder:'Enter your name'
    },
      {
      type:'select',
      label:'Favorite food',
      name:'food',
      options:['Pizza','Hot Dogs','IceCream', 'Coffee'],
      placeholder:'Select an option'
    },
      {
      type:'button',
      label:'Submit',
      name:'submit'
    }
  ];

  formSubmitted(value) {
    console.log(value);
  }
}
