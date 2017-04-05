import { DynamicFormComponent } from './containers/dynamic-form/dynamic-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [DynamicFormComponent],
    exports: [DynamicFormComponent]
})
export class DynamicFormModule { }