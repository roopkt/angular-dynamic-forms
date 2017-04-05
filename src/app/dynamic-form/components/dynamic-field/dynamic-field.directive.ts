import { FormGroup } from '@angular/forms/forms';
import { Directive, Input } from '@angular/core/core';
@Directive({
    selector:'[dynamicField]'
})
export class DynamicFieldDirective{
    @Input()
    config;

    @Input()
    group:FormGroup;
}