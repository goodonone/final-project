import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id: number = 0;

  currentProduct: Product = new Product()

  constructor(private productService: ProductsService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const routeId = this.actRoute.snapshot.paramMap.get("id") ?? "";
    this.id = parseInt(routeId);
    this.productService.getProductByID(this.id).subscribe(foundProduct => {
      this.currentProduct = foundProduct;
    });

  

  }

  onDelete(id: number) {
    this.productService.deleteProductByID(id).subscribe(response => {
      this.productService = response;
      this.router.navigate(['products']);
    });
  }

    // if(id<=this.ProductsService.getJobsLength()){
    //   this.ourJobService.getJob(id).subscribe(result => {
    //     this.job = result;})
    // }
    // else{
    //   this.router.navigate(['**']);
    // }


}
