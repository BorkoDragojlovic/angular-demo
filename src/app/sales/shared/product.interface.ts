import { HasId } from '../../shared/has-id.interface'
export interface IProduct extends HasId {
    productID: number;
    productName: string;
}