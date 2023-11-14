import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from './services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'final-project';

  searchForName: string = "";
  input!: String;
  itemName: String = "";

  foundProduct: Product = new Product();

  productList: Product[] = [];

  constructor(private productService: ProductsService, private actRoute: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
      this.productService.getAllProducts().subscribe(foundProducts => {
      this.productList = foundProducts;
    });
  }

  searchByName(searchForName: string) {
    var searchForName = (<HTMLInputElement>document.getElementById('mySearch') ?? "").value;
    var input = searchForName.charAt(0).toUpperCase() + searchForName.slice(1);
    // window.location.assign('/search/`input`');
    // window.open("/search", "`input`");
    this.router.navigate(['/search', input]);
  };
}





