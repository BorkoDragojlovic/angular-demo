import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service'
import { Customer } from '../shared/customer.model';
@Component ({
   selector: 'my-app',
   templateUrl: './customer-list.component.html',
   providers: [CustomerService]
})
export   class   CustomerList  {
   constructor(private customerService: CustomerService) {
   }
   customerEdit: Customer = new Customer();
   selectedCustomer: Customer;
   customerList: Customer[];

   getAll(): void {
       this.customerList = this.customerService.getCustomers();
   }
   saveCustomer(customer:Customer): void {
       this.customerService.addCustomer(customer);
   };
   removeCustomer(id:number): void {
       this.customerService.removeCustomer(id);
   } ;

   selectCustomer(customer:Customer) {
       if (customer.id == this.customerEdit.id) {
           this.customerEdit = new Customer();
       } else {
           this.customerEdit = <Customer> JSON.parse(JSON.stringify(customer));
       }
   }
   
   ngOnInit() : void {
      this.getAll();
   }
}