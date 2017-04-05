import { Component,ViewContainerRef} from '@angular/core/core';
import {FormGroup} from '@angular/forms'
@Component({
    selector: 'form-input',
    styleUrls: ['form-input.component.scss'],
    template: `
    <div 
        class="dynamic-field form-input" [formGroup]="group">
        <label>{{config.label}} </label>
        <Input
            type="text"
            [attr.placeholder]= "config.placeholder"
            [formControlName] ="config.name" />
    </div>
    `
})  
export class FormInputComponent{
    config;
    group:FormGroup;
}