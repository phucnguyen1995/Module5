import {Component, OnInit} from '@angular/core';
import {Division} from "../model/division";
import {EducationDegree} from "../model/education-degree";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Position} from "../model/position";
import {EmployeeService} from "../service/employee.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  positions: Position[] = [];
  divisions: Division[] = [];
  educations: EducationDegree[] = [];

  createForm = new FormGroup({
    code: new FormControl("", [Validators.required,Validators.pattern('^(NV)-[0-9]{4}$')]),
    name: new FormControl("", [Validators.required]),
    position: new FormControl("", [Validators.required]),
    educationDegree: new FormControl("", [Validators.required]),
    division: new FormControl("", [Validators.required]),
    birthday: new FormControl("", [Validators.required]),
    idCard: new FormControl("", [Validators.required, Validators.pattern('[0-9]{9}|[0-9]{12}')]),
    salary: new FormControl("", [Validators.required, Validators.min(1)]),
    phone: new FormControl("", [Validators.required, Validators.pattern('^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)[0-9]{7}$')]),
    email: new FormControl("", [Validators.required, Validators.email]),
    address: new FormControl("", [Validators.required])
  })

  constructor(private employeeService: EmployeeService,
              private router: Router,
              private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.employeeService.getAllDivision().subscribe(data => {
      this.divisions = data
    })

    this.employeeService.getAllPosition().subscribe(data => {
      this.positions = data
    })

    this.employeeService.getAllEducationDegree().subscribe(data => {
      this.educations = data
    })
  }

  createEmployee() {
    const employee = this.createForm.value;
    this.employeeService.saveEmployee(employee).subscribe(() => {
      this.router.navigateByUrl("/employee-list");
      this.showMessageSuccess();
    }, error => {
      this.showError();
    })
  }


  showMessageSuccess() {
    this.toast.success('Create successfully', 'message')
  }

  showError() {
    this.toast.error('error', 'message')
  }
}
