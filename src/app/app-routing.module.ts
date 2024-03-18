import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { AddStudentFormComponent } from './components/AddStudentForm/AddStudentForm.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { StudentComponent } from './components/student/student.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { authGuard } from './guards/auth.guard';
import { canDeactivateGuard } from './guards/canDeactivate.guard';
import { usersResolver } from './guards/users.resolver';

const routes: Routes = [
  // { path: '', redirectTo: '/registration', pathMatch: 'full' },
  { path: '', redirectTo: '/Home', pathMatch: 'full' }, // { component: HomeComponent },
  {
    path: 'Home',
    component: HomeComponent,
    resolve: { users: usersResolver },
    data: { name: 'Test Route Data' }, // same as resolve when get the data using activatedRoute
  },
  {
    path: 'students/:id',
    component: StudentComponent,
    canActivate: [authGuard],
  },
  {
    path: 'registration',
    component: RegistrationFormComponent,
  },
  { path: 'Login', component: LoginComponent },
  {
    path: 'add-student',
    title: 'Add Student',
    component: AddStudentFormComponent,
    // canActivate: [AuthGuardService],
    canDeactivate: [canDeactivateGuard],
    canActivate: [authGuard],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
