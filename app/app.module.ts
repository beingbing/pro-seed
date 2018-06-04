import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthFormModule } from './auth-form/auth-form.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    AuthFormModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ]
})
export class AppModule {}
