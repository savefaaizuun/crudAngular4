import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private http:Http) { }
  productObj:object = {};

  addNewProduct2 = function(product) {
    this.productObj = {
      "name": product.name,
      "color": product.color
    }

    this.http.post("http://localhost:5555/products/", this.productObj).subscribe(
      (res: Response) => {
        // this.products = res.json();
        console.log(res)
      })
    }


  ngOnInit() {
  }

}
