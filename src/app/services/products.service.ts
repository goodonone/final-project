import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  dataSource: string = "http://localhost:3000/items";

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.dataSource);
  }

  getProductByID(id: number): Observable<Product> {
    return this.http.get<Product>(this.dataSource + "/" + id);
  }

  getProductByName(itemName: String): Observable<Product> {
    return this.http.get<Product>(this.dataSource + "/" + itemName);
  }

  createNewProduct(newProduct: Product): Observable<Product> {
    return this.http.post<Product>(this.dataSource, newProduct);
  }

  editProduct(id: number, edittedProduct: Product): Observable<Product> {
    return this.http.put<Product>(this.dataSource + "/" + id, edittedProduct);
  }

  deleteProductByID(id: number): Observable<any> {
    return this.http.delete<any>(this.dataSource + "/" + id)
  }

  // getProductsLength(){
  //   arrayLength : Number 
  //   return this.http.get<Number>(this.dataSource.items[].length);
  //   console.log()
  // }

}
