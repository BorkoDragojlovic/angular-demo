import { HasId } from '../../shared/has-id.interface'
export interface ICustomer extends HasId {
    id: number;
    firstName: string;
    lastName: string;
}