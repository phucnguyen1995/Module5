import {Component, OnInit,EventEmitter, Output} from '@angular/core';
import {Student} from "../../model/Student";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {



  @Output("studentCreateOne") onCreate=new EventEmitter<Student>();
  studentCreate: Student | undefined


  // cách làm mới theo bài 6
  studentForm : FormGroup;

  constructor() {
    this.studentForm=new FormGroup({

      name:new FormControl("",[Validators.required,Validators.minLength(5)]),
      gender:new FormControl("",[Validators.required]),
      point:new FormControl("",[Validators.required,Validators.min(0),Validators.max(8)])


    });


  }

  ngOnInit(): void {
  }

  createStudent(name: string, gender: string, point: string) {
     //kiểu số nhưng giờ là string
     this.studentCreate={name:name,gender: parseInt(gender),point:parseInt(point)};
     console.log(this.studentCreate);

     this.onCreate.emit(this.studentCreate)
  }

  createBai7() {
    if(this.studentForm.valid){
      this.onCreate.emit(this.studentForm.value);
    }


  }
}
