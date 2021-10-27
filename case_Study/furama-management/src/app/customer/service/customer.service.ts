import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../model/customer';
import {Observable} from 'rxjs';
import {CustomerType} from "../model/customer-type";
import {Employee} from "../../employee/model/employee";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public API_CUSTOMER = 'http://localhost:3000/customer'

  constructor(private http: HttpClient) {
  }

  public getAllCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_CUSTOMER);
  }

  public getAllCustomerType(): Observable<CustomerType[]> {
    return this.http.get<CustomerType[]>('http://localhost:3000/customerType');
  }

  public saveCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.API_CUSTOMER, customer)
  }

  public findById(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.API_CUSTOMER + "/" + id);
  }

  public editCustomer(customer: Customer, id: number): Observable<Customer> {
    return this.http.put<Customer>(this.API_CUSTOMER + "/" + id, customer)
  }

  public deleteCustomer( id: number): Observable<void> {
    return this.http.delete<void>(this.API_CUSTOMER + "/" + id)
  }

  // public search(name: string, customerTypeName: string): Observable<Customer[]> {
  //   return this.http.get<Customer[]>(this.API_CUSTOMER + "?name_like=" + name + "&customerType.name=" + customerTypeName);
  // }


  public search(name: string, customerTypeName: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_CUSTOMER + "?name_like=" + name + "&customerType.name_like=" + customerTypeName);
  }



  sortByName(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_CUSTOMER + '?_sort=name')
  }

}




// searchEmployee(name: string, divisionName: string): Observable<Employee[]> {
//   return this.http.get<Employee[]>(this.EMPLOYEE_URL + "?name_like=" + name + "&division.name_like=" + divisionName)
// }
