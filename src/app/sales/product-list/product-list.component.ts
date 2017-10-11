import { Component } from '@angular/core';
import { Product } from '../shared/product.model';
import { ProductService } from '../services/products.service';

@Component({
    selector: 'my-app',
    templateUrl: './product-list.component.html',
    providers: [ProductService]
})

export class ProductList {
    productList: Product[];
    constructor(private productService: ProductService) {
    }

    ngOnInit(): void {
        this.productService.getAll()
            .then(productList => this.productList = productList);
    }
}