import { FormGroup } from '@angular/forms/forms';
import { Component } from '@angular/core/core';
@Component({
    selector:'form-button',
    styleUrls:['form-button.component.scss'],
    template:`
    <div class="dynamic-field form-button" [formGroup]="group" >
        <button type="submit"> {{config.label}} </button>
    </div>
    `
})
export class FormButtonComponent implements Field{
    group:FormGroup;
    config;
}