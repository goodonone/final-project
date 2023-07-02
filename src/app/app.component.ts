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
  // input: string = "";
  // filter!: any;
  // value!: any;

  foundProduct: Product = new Product();


  constructor(private productService: ProductsService, private actRoute: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {

  }

  searchByName(searchForName: string) {
    var searchForName = (<HTMLInputElement>document.getElementById('mySearch')).value;
    // this.searchForName = document.getElementById('mySearch')?.value;
    // this.productService.getProductByName(searchForName).subscribe(result => {
    //   this.foundProduct = result;
      // console.log(this.foundProduct);
      this.router.navigate(['/search', searchForName]);
    }; 


    // this.productService.getProductByName(input).subscribe(foundProducts => {
      // this.productList = foundProducts;
      // if
      // this.filter = input.valueOf.toUpperCase();
      // this.router.navigate(['/products/', this.input]);
    };
    


    // if(input = this.productList.itemName

    // }

    // for (var i = 0; i < this.productService.dataSource.length; i++)
    // {
    //   this.
    // }

    // this.productService.getAllProducts().subscribe(foundProducts => {
    //   this.productList = foundProducts;
    //   this.productList;


      //   input = document.getElementById("mySearch");
      //   filter = input.value.toUpperCase();
      //   ul = document.getElementById("myMenu");
      //   li = ul.getElementsByTagName("li");

      //   // Loop through all list items, and hide those who don't match the search query
      //   for (i = 0; i < li.length; i++) {
      //     a = li[i].getElementsByTagName("a")[0];
      //     if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      //       li[i].style.display = "";
      //     } else {
      //       li[i].style.display = "none";
      //     }
      //   }
      // }

    // });

  // }
  
