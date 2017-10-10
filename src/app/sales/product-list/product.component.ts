import { Component } from '@angular/core';
import { IProduct } from '../shared/product.interface';
import { ProductService } from '../services/products.service';
//import { appService } from './app.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
    selector: 'my-app',
    templateUrl: 'Product',
    providers: [ProductService]
})

export class ProductComponent {
    iproducts: IProduct[];
    constructor(private productService: ProductService) {
    }

    ngOnInit(): void {
        this.productService.getproducts()
            .subscribe(iproducts => this.iproducts = iproducts);
    }
}