
import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { FieldConfig } from '../../models/field-config.interface';
@Component({
    exportAs: 'dynamicForm',
    selector: 'dynamic-form',
    styleUrls: ['dynamic-form.component.scss'],
    template: `
    <form 
    class="dynamic-form"
    [FormGroup] ="form"
    (ngSubmit) ="submitted.emit(form.value)">

    <ng-container 
        *ngFor="let field of config;" 
        dynamicField
        [config] = "field"
        [group] = "form">
    </ng-container>
    </form>
    `
})

export class DynamicFormComponent implements OnInit {
    @Input()
    config: any[] = [];
    form: FormGroup;
    @Output()
    submitted: EventEmitter<any> = new EventEmitter<any>();
    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.form = this.createGroup();
    }
    createGroup() {
        const group = this.fb.group({});
        this.config.forEach(control => group.addControl(control.name, this.fb.control({})));
        return group;
    }
}
