import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Product } from '../shared/product.model';
import { AbstractRestService } from '../../shared/shared.service';

const url: string = 'api/products';

@Injectable()
export class ProductService extends AbstractRestService<Product>{
  constructor( http: Http) { 
    super(http, url);
  }
}