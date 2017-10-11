import { HasId } from '../../shared/has-id.interface'
export class Product implements HasId{ 
   constructor ( 
      public id: number, 
      public productName: string 
   ) {  } 
}