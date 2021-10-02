import {Component} from '@angular/core';
import {Student} from "../model/Student";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'AngularComponent';

  // b2 tao mảng chứa danh sách học viên

  // Students: Student[]=[
  //
  //   {name:"nguyễn văn a",gender:0,point:100},
  //   {name:"nguyễn văn b",gender:1,point:0},
  //   { name:"nguyễn văn c",gender:2,point:80}
  //
  //
  //
  //
  //
  // ]
  students: Student[] = [

    {name: "nguyễn văn a", gender: 0, point: 100},
    {name: "VIP", gender: 0, point: 100},
    {name: "nguyễn văn b", gender: 1, point: 0},
    {name: "nguyễn văn c", gender: 2, point: 80}


  ]
  studentParent: Student | undefined;

  showDetail(item: Student) {

    this.studentParent = item;

  }

  getNewStudent($event: Student) {
    this.students.unshift($event)

  }
}
