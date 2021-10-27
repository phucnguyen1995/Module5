import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CustomerService} from "../service/customer.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {
  public id: number;
  public code: string;


  constructor(public dialogRef: MatDialogRef<DeleteCustomerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public customerService: CustomerService,
              private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.id = this.data.customer.id;
    this.code = this.data.customer.code;
  }

  close(): void {
    this.dialogRef.close();
  }

  delete() {
    this.customerService.deleteCustomer(this.id).subscribe(() => {
      this.dialogRef.close();
      this.toast.success('Bạn đã xóa thành công!!', 'message')
    });
  }
}
