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
import { RouterModule } from '@angular/router';
import { RoutingModule } from './routing/routing.module';
import { LoaderComponent } from './components/loader/loader.component';

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
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    // RoutingModule, //this replaced by AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
