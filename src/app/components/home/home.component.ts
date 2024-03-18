import { ActivatedRoute, Router } from '@angular/router';
import { User, UserService } from './../../services/user.service';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  users: User[] = [];
  userService: UserService = inject(UserService);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  message: string = '';
  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      console.log(data);

      this.users = data['users'];
    });
    // console.log(this.activatedRoute.snapshot.data['users']);
    // this.userService.getAllUsers().subscribe((users) => (this.users = users));

    // this.message = this.router.getCurrentNavigation().extras.state['message'];

    console.log(history.state);

    this.message = history.state['message'];
  }
}
