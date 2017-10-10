import {IProduct} from './product.interface';
export class Product implements IProduct{ 
   constructor ( 
      public productID: number, 
      public productName: string 
   ) {  } 
}