import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList: Product[] = [];

  constructor(private productService: ProductsService){ }

ngOnInit(): void {
  this.loadProducts();
}

loadProducts(){
  this.productService.getAllProducts().subscribe(foundProducts => {
      this.productList = foundProducts;
  });
}

}

