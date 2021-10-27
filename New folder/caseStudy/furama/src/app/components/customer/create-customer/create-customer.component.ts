import { Component, OnInit } from '@angular/core';
import {CustomerType} from "../model/customer-type";

import {Router} from "@angular/router";
import {CustomerService} from "../service/customer.service";
import {FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customerTypes: CustomerType[] = [];

  createForm = new FormGroup({
    code: new FormControl('', [Validators.required, Validators.pattern('^(KH)-[0-9]{4}$')]),
    name: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    customerType: new FormControl('', Validators.required),
    birthday: new FormControl('', Validators.required),
    idCard: new FormControl('', [Validators.required, Validators.pattern('[0-9]{9}|[0-9]{12}')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)[0-9]{7}$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', Validators.required)
  })


  constructor(private customerService: CustomerService,
              private router: Router
              // private toast: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.getCustomerType();
  }


  getCustomerType() {
    this.customerService.getAllCustomerType().subscribe(data => {
      this.customerTypes = data;
    })
  }

  createCustomer() {
    const customer = this.createForm.value;
    this.customerService.saveCustomer(customer).subscribe(() => {
      this.router.navigateByUrl('/customer-list');

     alert("bạn đã tạo thành công")

    }, error => {
     alert("không thanh công")
    })
  }

}
