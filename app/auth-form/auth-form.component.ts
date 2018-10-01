import { Component, Output, EventEmitter, ViewChild, AfterViewInit, ContentChild, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

import { AuthRememberComponent } from './auth-remember.component';
import { AuthMessageComponent } from './auth-message.component';

import { User } from './auth-form.interface';

@Component({
    selector: 'auth-form',
    template: `
    <div>
        <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
            <ng-content select="h3"></ng-content>
            <label>
                Email address
                <input type="email" name="email" ngModel>
            </label>
            <label>
                Password
                <input type="password" name="password" ngModel>
            </label>
            <ng-content select="auth-remember"></ng-content>
            <auth-message [style.display]="(showMessage ? 'inherit' : 'none')"></auth-message>
            <ng-content select="button"></ng-content>
        </form>
    </div>
    `
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {

    public showMessage: boolean;

    @ViewChild(AuthMessageComponent) message: AuthMessageComponent;

    @ContentChildren(AuthRememberComponent) public remember: QueryList<AuthRememberComponent>;

    @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

    onSubmit(value: User) {
        this.submitted.emit(value);
    }

    public ngAfterContentInit() {
        if (this.message) {
            this.message.days = 30;
        }
        if (this.remember) {
            // this.remember.checked.subscribe((checked: boolean) => {
            //     this.showMessage = checked;
            // });
            console.log(this.remember);
            this.remember.forEach((item:AuthRememberComponent) => {
                item.checked.subscribe((checked: boolean) => this.showMessage = checked);
            });
        }
    }

    public ngAfterViewInit() {
        // this.message.days = 30;
        console.log(this.message);
    }

}
