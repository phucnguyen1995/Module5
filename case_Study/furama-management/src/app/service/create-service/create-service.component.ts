import {Component, OnInit} from '@angular/core';
import {ServiceType} from "../model/service-type";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../../customer/model/customer-type";
import {ServiceService} from "../service/service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {
  serviceTypes: ServiceType[] = []

  createForm = new FormGroup({
    code: new FormControl('', [Validators.required, Validators.pattern('^(DV)-[0-9]{4}$')]),
    name: new FormControl('', [Validators.required]),
    area: new FormControl('', [Validators.required, Validators.min(1)]),
    numberOfFloors: new FormControl('', [Validators.required, Validators.min(1)]),
    maxPeople: new FormControl('', [Validators.required, Validators.min(1)]),
    cost: new FormControl('', [Validators.required, Validators.min(1)]),
    serviceType: new FormControl('', [Validators.required]),
    standardRoom: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  })

  constructor(private serviceService: ServiceService,
              private router: Router,
              private toastTr: ToastrService) {
  }

  ngOnInit(): void {
    this.getAllServiceType()
  }

  getAllServiceType() {
    this.serviceService.getAllServiceType().subscribe(data => {
      this.serviceTypes = data;
    })
  }

  createService() {
    const service = this.createForm.value;
    this.serviceService.createService(service).subscribe(() => {
      this.router.navigateByUrl('/service-list');
      this.showMessageSuccess();
    }, error => {
      this.showError();
    })
  }

  showMessageSuccess() {
    this.toastTr.success('Create successfully', 'message')
  }

  showError() {
    this.toastTr.error('error', 'message')
  }
}
