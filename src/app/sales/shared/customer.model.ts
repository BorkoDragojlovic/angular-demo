import { ICustomer } from './customer.interface';

export class Customer implements ICustomer {
    id: number;
    firstName: string;
    lastName: string;
}