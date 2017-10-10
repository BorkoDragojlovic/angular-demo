import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Customer } from '../shared/customer.model';
import { AbstractRestService } from '../../shared/shared.service';

const url: string = 'api/customers';

@Injectable()
export class CustomerService extends AbstractRestService<Customer>{
  constructor( http: Http) { 
    super(http, url);
  }
}