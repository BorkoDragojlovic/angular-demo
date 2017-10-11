import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service'
import { Customer } from '../shared/customer.model';
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
        if (!customer.id) {
            this.customerService.create(customer)
                .then(customer => {
                    this.customerList.push(customer)
                    this.selectCustomer(customer);
                });
        } else {
            this.customerService.update(customer)
                .then(customer => {
                    var customerIndex = this.customerList.map(function (it) { return it.id; }).indexOf(customer.id);
                    this.customerList[customerIndex] = customer;
                    this.customerEdit = <Customer>JSON.parse(JSON.stringify(customer));
                });
        }

    }
    removeCustomer(customer: Customer): void {
        this.customerService.delete(customer)
            .then(res => {
                var removeIndex = this.customerList.map(function (it) { return it.id; }).indexOf(customer.id);
                this.customerList.splice(removeIndex, 1);
                if (this.customerEdit === customer) { this.customerEdit = new Customer(); }
            });
    }

    selectCustomer(customer: Customer) {
        if (customer.id == this.customerEdit.id) {
            this.customerEdit = new Customer();
        } else {
            this.customerEdit = <Customer>JSON.parse(JSON.stringify(customer));
        }
    }

    clear() { 
        this.customerEdit = new Customer();
    }

    ngOnInit(): void {
        this.getAll();
    }
}