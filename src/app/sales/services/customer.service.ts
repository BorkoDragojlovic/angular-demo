import { Injectable } from '@angular/core';
import { CUSTOMERS } from '../../mock-data/mock.customer';
import { Customer } from '../shared/customer.model';

@Injectable()
export class CustomerService {
    customer :Customer
  getCustomers(): Customer[] {
    return CUSTOMERS;
  }
  addCustomer(customer: Customer): Customer {
      this.customer = <Customer> JSON.parse(JSON.stringify(customer));
      this.customer.id = Math.max.apply(Math,CUSTOMERS.map(function(o){return o.id;}))+1;
      CUSTOMERS.push(this.customer);
      return this.customer;
  }
  removeCustomer(id: number): void {
    var removeIndex = CUSTOMERS.map(function(it) { return it.id; }).indexOf(id);
    CUSTOMERS.splice(removeIndex, 1);
    //this.customer = CUSTOMERS.find(function (obj) { return obj.id === id; });
  }
}