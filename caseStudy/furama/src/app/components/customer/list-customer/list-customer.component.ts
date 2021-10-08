import { Component, OnInit } from '@angular/core';
import {Customer} from "../model/customer";
import {CustomerService} from "../service/customer.service";
import {CustomerType} from "../model/customer-type";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  constructor(private customerService :CustomerService,
              // public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllCustomerType();
    this.showList()
  }

  // page: number;
  term = '';
  customerTypeName = '';
  customers:Customer[]=[];
  customerTypes: CustomerType[] = [];





  showList() {
    this.customerService.getAllCustomer().subscribe(data=>{
      this.customers = data;
    })
  }

  getAllCustomerType() {
    this.customerService.getAllCustomerType().subscribe(data => {
      this.customerTypes = data;
    })
  }



  //
  // openDialog(id: any) {
  //   this.customerService.findById(id).subscribe(data => {
  //     const dialogRef = this.dialog.open(DeleteCustomerComponent, {
  //       width: '500px',
  //       data: {customer: data},
  //       disableClose: true
  //     });
  //
  //     dialogRef.afterClosed().subscribe(() => {
  //       this.ngOnInit();
  //     });
  //   });
  // }

}
