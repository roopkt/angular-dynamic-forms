import { FormGroup } from '@angular/forms';
import { ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';

import { FormInputComponent } from '../form-input/form-input.component';
import { FormButtonComponent } from '../form-button/form-button.component';
import { FormSelectComponent } from '../form-select/form-select.component'


const components = {
    button: FormButtonComponent,
    input: FormInputComponent,
    select: FormSelectComponent
}
@Directive({
    selector: '[dynamicField]'
})
export class DynamicFieldDirective implements OnInit {
    @Input()
    config;

    @Input()
    group: FormGroup;

    component;

    constructor(
        private resolver: ComponentFactoryResolver,
        private container: ViewContainerRef
    ) {
    }

    public ngOnInit(): void {
        const component = components[this.config.type];
        const factory = this.resolver.resolveComponentFactory<any>(component);
        this.component = this.container.createComponent(factory);
        this.component.instance.config = this.config;
        this.component.instance.group = this.group;
    }
}