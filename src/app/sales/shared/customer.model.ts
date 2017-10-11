import { HasId } from '../../shared/has-id.interface'

export class Customer implements HasId {
    id: number;
    firstName: string;
    lastName: string;
}