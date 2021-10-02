import {Component, OnInit,EventEmitter, Output} from '@angular/core';
import {Student} from "../../model/Student";

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {



  @Output("studentCreateOne") onCreate=new EventEmitter<Student>();

  studentCreate: Student | undefined

  constructor() { }

  ngOnInit(): void {
  }

  createStudent(name: string, gender: string, point: string) {
     //kiểu số nhưng giờ là string
     this.studentCreate={name:name,gender: parseInt(gender),point:parseInt(point)};
     console.log(this.studentCreate);

     this.onCreate.emit(this.studentCreate)
  }
}
