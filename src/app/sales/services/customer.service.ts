import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { CUSTOMERS } from '../../mock-data/mock.customer';
import { ICustomer } from '../shared/customer.interface';

@Injectable()
export class CustomerService {
  customer: ICustomer
  
  //Only for testing purpose. HTTP GET method has to be added.
  getCustomers(): Observable<ICustomer[]> {
    /*return CUSTOMERS
    .map((response: Response) => <IProduct[]> response.json())
    .do(data => console.log(JSON.stringify(data))); */
    //return CUSTOMERS;
    return Observable.of(CUSTOMERS);
  }

  //Only for testing purpose. HTTP POST Method has to be added.
  addCustomer(customer: ICustomer): ICustomer {
    this.customer = <ICustomer>JSON.parse(JSON.stringify(customer));
    this.customer.id = Math.max.apply(Math, CUSTOMERS.map(function (o) { return o.id; })) + 1;
    CUSTOMERS.push(this.customer);
    return this.customer;
  }

  //Only for testing purpose. HTTP DELETE Method has to be added.
  removeCustomer(id: number): void {
    var removeIndex = CUSTOMERS.map(function (it) { return it.id; }).indexOf(id);
    CUSTOMERS.splice(removeIndex, 1);
    //this.customer = CUSTOMERS.find(function (obj) { return obj.id === id; });
  }
}