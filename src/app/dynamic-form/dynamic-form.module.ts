
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormInputComponent } from './components/form-input/form-input.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { DynamicFormComponent } from './containers/dynamic-form/dynamic-form.component';
import { FormSelectComponent } from "./components/form-select/form-select.component";


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        DynamicFormComponent,
        FormButtonComponent,
        FormInputComponent,
        FormSelectComponent
        ],
    exports: [DynamicFormComponent]
})
export class DynamicFormModule { }