import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer";
import {CustomerType} from "../model/customer-type";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public API_CUSTOMER = 'http://localhost:3000/customer';
  public API_CUSTOMER_TYPE='http://localhost:3000/customerType'

  constructor(private http: HttpClient) {
  }

  public getAllCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_CUSTOMER);
  }

  public getAllCustomerType(): Observable<CustomerType[]> {
    return this.http.get<CustomerType[]>(this.API_CUSTOMER_TYPE);
  }


  public saveCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.API_CUSTOMER, customer)
  }

  // public findById(id: number): Observable<Customer> {
  //   return this.http.get<Customer>(this.API_CUSTOMER + "/" + id)
  // }

  findById(id: number) : Observable<Customer> {
    return this.http.get<Customer>(this.API_CUSTOMER + "?id=" + id);
  }

  public editCustomer(customer: Customer, id: number): Observable<Customer> {
    return this.http.put<Customer>(this.API_CUSTOMER + "/" + id, customer)
  }

  public deleteCustomer( id: number): Observable<void> {
    return this.http.delete<void>(this.API_CUSTOMER + "/" + id)
  }




  public search(name: string,customerTypeName: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_CUSTOMER + "?name_like=" + name + "&customerType.name=" + customerTypeName);
  }



}
