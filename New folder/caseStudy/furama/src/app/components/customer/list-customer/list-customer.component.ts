import { Component, OnInit } from '@angular/core';
import {Customer} from "../model/customer";
import {CustomerService} from "../service/customer.service";
import {CustomerType} from "../model/customer-type";
import {MatDialog} from "@angular/material/dialog";
import {DeleteCustomerComponent} from "../delete-customer/delete-customer.component";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  constructor(private customerService :CustomerService,
              public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllCustomerType();
    this.showList()
  }

  page:any;

  term ='';
  customerTypeName ='';


  customerTypes: CustomerType[] = [];
  customers: Customer[] = [];

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



  openDialog(id: any) {
    this.customerService.findById(id).subscribe(data => {
      const dialogRef = this.dialog.open(DeleteCustomerComponent, {
        width: '500px',
        data: {customer: data},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(() => {
        this.ngOnInit();
      });
    });
  }






  searchCustomer() {
    console.log(this.term)
    console.log(this.customerTypeName)
    this.customerService.search(this.term,this.customerTypeName).subscribe(data => {
      this.customers = data;
      this.page = 1;
    })
  }




}
