import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList: Product[] = [];

  id: number = 0;

  constructor(private productService: ProductsService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe(foundProducts => {
      this.productList = foundProducts;
    });
  }

  onDelete(id: number) {
    this.productService.deleteProductByID(id).subscribe(response => {
      this.productService = response;
      this.router.navigate(['products']);
      // location.reload();
    });
  }



}

