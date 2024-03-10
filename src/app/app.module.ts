import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddStudentFormComponent } from './components/AddStudentForm/AddStudentForm.component';
import { SelectPlaceholderDirective } from './directives/select-placeholder.directive';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    AddStudentFormComponent,
    SelectPlaceholderDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
