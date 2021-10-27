import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../service/customer.service";
import {Customer} from "../model/customer";
import {MatDialog} from "@angular/material/dialog";
import {DeleteCustomerComponent} from "../delete-customer/delete-customer.component";
import {CustomerType} from "../model/customer-type";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  page: number;
  term = '';
  customerTypeName = '';
  customerTypes: CustomerType[] = [];
  customers: Customer[] = [];


  constructor(private customerService : CustomerService,
              public dialog: MatDialog,
  private toast: ToastrService
  ) { }

  ngOnInit(): void {
    this.showList();
    this.getAllCustomerType();
  }

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
        console.log(this.page);
      },
    )
  }






































  showError() {
    this.toast.error('List empty!', 'message')
  }

  phuc() {
    this.page = 1;
  }






















  sortByName() {
    this.customerService.sortByName().subscribe(data => {
       this.customers = data;
      this.page = 1;
    })
  }


}












// searchEmployee() {
//   console.log(this.term)
//   console.log(this.divisionName)
//   this.employeeService.searchEmployee(this.term, this.divisionName).subscribe(data => {
//     this.employees = data;
//     this.page = 1;
//   })
// }
