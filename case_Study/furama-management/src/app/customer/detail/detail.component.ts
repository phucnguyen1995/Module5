import {Component, Input, OnInit} from '@angular/core';
import {Customer} from "../model/customer";
import {CustomerService} from "../service/customer.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


  customer: any;
  constructor(private activatedRoute: ActivatedRoute, private customerService: CustomerService) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = +paramMap.get("id"); //name phải trùng với từ khóa khai báo bên app-routing
      console.log(id);
       this.customerService.findById(id).subscribe(data=>{
        this.customer=data;
       })
      ;
    })
  }


// {path:'customer-detail/:id',component:DetailComponent},



  // constructor(private route: ActivatedRoute,
  //             public customerService: CustomerService) {
  // }

  ngOnInit(): void {
    // const customerId = this.route.snapshot.paramMap.get('id');
    // console.log(customerId);
    // this.customerService.findById(parseInt("customerId")).subscribe(data => {
    //   this.customer = Array.of(data);
    //   console.log(this.customer);
    // });
  }
}
