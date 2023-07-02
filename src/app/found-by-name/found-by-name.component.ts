import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-found-by-name',
  templateUrl: './found-by-name.component.html',
  styleUrls: ['./found-by-name.component.css']
})
export class FoundByNameComponent implements OnInit {

  constructor(private productService: ProductsService, private actRoute: ActivatedRoute, private router: Router) { }

  id: number = 0;
  itemName: string = "";

  searchedProduct: Product = new Product()

  ngOnInit(): void {
    const search = this.actRoute.snapshot.params['itemName'] ?? "";
    console.log(search);
    // const routeId = this.actRoute.snapshot.params.get("itemName") ?? "";
    // this.id = parseInt(routeId);
    this.productService.getProductByName(search).subscribe(foundProduct => {
      this.searchedProduct = foundProduct;
      console.log(this.searchedProduct);
    });
  }

    onDelete(id: number) {
      this.productService.deleteProductByID(id).subscribe(response => {
        this.productService = response;
        this.router.navigate(['products']);
      });
    }

  
}

 //   const routeId = this.actRoute.snapshot.paramMap.get("itemName") ?? "";
  //   this.productService.getProductByName(this.itemName).subscribe(foundProduct => {
  //     this.searchedProduct = foundProduct;