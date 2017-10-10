import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service'
import { Customer } from '../shared/customer.model';
import { ICustomer } from '../shared/customer.interface';
import { FloorPlanComponent } from '../../floor-plans/floor-plan/floor-plan.component'
@Component({
    selector: 'my-app',
    templateUrl: './customer-list.component.html',
    providers: [CustomerService]
})
export class CustomerList {
    constructor(private customerService: CustomerService) {
    }
    customerEdit: Customer = new Customer();
    selectedCustomer: Customer;
    customerList: Customer[];

    getAll(): void {
        this.customerService.getAll().then(customerList => this.customerList = customerList);
    }
    saveCustomer(customer: Customer): void {
        this.customerService.save(customer).then(customer => this.customerList.push(customer));
    };
    removeCustomer(customer: Customer, event:any): void {
        event.stopPropagation();
        this.customerService.delete(customer)
            .then(res => {
                this.customerList = this.customerList.filter(h => h !== customer);
                if (this.customerEdit === customer) { this.customerEdit = null; }
            });
    };

    selectCustomer(customer: Customer) {
        if (customer.id == this.customerEdit.id) {
            this.customerEdit = new Customer();
        } else {
            this.customerEdit = <Customer>JSON.parse(JSON.stringify(customer));
        }
    }

    ngOnInit(): void {
        this.getAll();
    }
}