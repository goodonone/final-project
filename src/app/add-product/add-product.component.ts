import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  newProduct: Product = new Product();

  constructor(private productService: ProductsService, private router: Router){
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.productService.createNewProduct(this.newProduct).subscribe(response => {
        console.log(response);
        this.router.navigateByUrl("/products")
    });
}

}
