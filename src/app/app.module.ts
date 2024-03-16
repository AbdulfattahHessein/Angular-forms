import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddStudentFormComponent } from './components/AddStudentForm/AddStudentForm.component';
import { SelectPlaceholderDirective } from './directives/select-placeholder.directive';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { StudentComponent } from './components/student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    AddStudentFormComponent,
    SelectPlaceholderDirective,
    NotFoundComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    StudentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
