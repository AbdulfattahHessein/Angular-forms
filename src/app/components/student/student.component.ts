import { ActivatedRoute, Route, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit, OnDestroy {
  students = [
    {
      id: 1,
      name: 'Taha Hussein',
    },
    {
      id: 2,
      name: 'Ali Hussein',
    },
  ];
  student: (typeof this.students)[0];
  subscriptions: Subscription[] = [];
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.paramsSubscription();
    this.queryParamsSubscription();
  }
  onSearchClick(searchKey: string) {
    this.router.navigate(['students', 1], {
      queryParams: { searchKey },
    });
  }
  paramsSubscription() {
    let paramSubs = this.activatedRoute.params
      .pipe(map((params) => params['id']))
      .subscribe((id) => {
        this.student = this.students.find((s) => s.id == id);
      });

    this.subscriptions.push(paramSubs);

    // this.activatedRoute.paramMap.subscribe((params) => {
    //   const id = +params.get('id');
    //   this.student = this.students.find((s) => s.id === id);
    // });
  }
  queryParamsSubscription() {
    let queryParamsSubs = this.activatedRoute.queryParams.subscribe(
      (queryParams) => {
        console.log('queryParams', queryParams);
      }
    );

    this.subscriptions.push(queryParamsSubs);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
