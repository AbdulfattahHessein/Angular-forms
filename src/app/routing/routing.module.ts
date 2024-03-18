import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { StudentComponent } from '../components/student/student.component';
import { RegistrationFormComponent } from '../components/registration-form/registration-form.component';
import { AddStudentFormComponent } from '../components/AddStudentForm/AddStudentForm.component';
import { LoginComponent } from '../components/login/login.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';

const routes: Routes = [
  // { path: '', redirectTo: '/registration', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'students/:id', component: StudentComponent },
  { path: 'registration', component: RegistrationFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-student', component: AddStudentFormComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
