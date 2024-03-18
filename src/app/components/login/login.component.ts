import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  subscriptions: Subscription[] = [];
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  returnUrl: string = 'Home';
  // username = 'taha';
  // password = '123';
  @ViewChild('username') username: ElementRef<HTMLInputElement>;
  @ViewChild('password') password: ElementRef<HTMLInputElement>;

  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  ngOnInit(): void {
    this.queryParamsSubscribe();
  }
  queryParamsSubscribe() {
    const sub = this.activatedRoute.queryParams.subscribe((queryParams) => {
      const isLogout = queryParams['logout'] == 'true';
      this.returnUrl = queryParams['returnUrl'] || 'Home';
      console.log(isLogout, this.returnUrl);

      if (isLogout) {
        this.authService.logout();
        alert(
          'You are logged out, IsLogged: ' + this.authService.isAuthenticated()
        );
      }
    });
    this.subscriptions.push(sub);
  }

  onLoginClick() {
    const username = this.username.nativeElement.value;
    const password = this.password.nativeElement.value;

    this.authService.login(username, password);

    if (this.authService.isAuthenticated()) {
      alert('Login successful for ' + username + ' and ' + password);
      this.router.navigate([this.returnUrl]);
    } else {
      alert('Login failed for ' + username + ' and ' + password);
    }
  }
}
