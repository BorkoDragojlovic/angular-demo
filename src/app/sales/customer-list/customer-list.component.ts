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
    customerEdit: ICustomer = new Customer();
    selectedCustomer: ICustomer;
    customerList: ICustomer[];

    getAll(): void {
        //this.customerList = this.customerService.getCustomers();
        this.customerService.getCustomers().subscribe(customerList => this.customerList = customerList);
    }
    saveCustomer(customer: Customer): void {
        this.customerService.addCustomer(customer);
    };
    removeCustomer(id: number): void {
        this.customerService.removeCustomer(id);
    };

    selectCustomer(customer: ICustomer) {
        if (customer.id == this.customerEdit.id) {
            this.customerEdit = new Customer();
        } else {
            this.customerEdit = <ICustomer>JSON.parse(JSON.stringify(customer));
        }
    }

    ngOnInit(): void {
        this.getAll();
    }
}