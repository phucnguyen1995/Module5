import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../service/customer.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Customer} from "../model/customer";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { Inject } from '@angular/core';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {

  // customerDelete: Customer | undefined;
  // id:any;
  //
  //
  //
  // constructor(private customerService: CustomerService,
  //             private router: Router,
  //             private activatedRoute: ActivatedRoute) {
  //   this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
  //
  //     this.id= paramMap.get("id");
  //     this.getCustomer(this.id);
  //   })
  // }


  // constructor() { }
  //
  // ngOnInit(): void {
  // }

//   getCustomer(id: number) {
//     return this.customerService.findById(id).subscribe(customer => {
//
//       this.customerDelete = customer;
//     });
//   }
// ​
//   deleteCustomer(id: number) {
//     this.customerService.deleteCustomer(id).subscribe(() => {
//       this.router.navigate(['/customer-list']);
//     }, e => {
//       console.log(e);
//     });
//   }
//   //
//   cancelDelete() {
//     this.router.navigateByUrl("/customer-list")
//   }

  public id: any;
  public name: any;

  constructor( public dialogRef: MatDialogRef<DeleteCustomerComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any,
               public customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.id = this.data.customer.id;
    this.name = this.data.customer.name;
  }

  close(): void {
    this.dialogRef.close();
  }

  delete() {
    this.customerService.deleteCustomer(this.id).subscribe(() => {
      this.dialogRef.close();
    });
  }
}



// constructor(private activatedRoute: ActivatedRoute,
//             private customerService: CustomerService,
//             private router: Router)
// {
//   activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
//     const id = paramMap.get("id"); //name phải trùng với từ khóa khai báo bên app-routing
//     console.log(id);
//
//     this.customerDelete=customerService.findById(id);
//   })
// }



//
// delete() {
//   this.customerService.deleteCustomer(this.customerDelete);
//
//   this.router.navigateByUrl("customer-list")
// }
