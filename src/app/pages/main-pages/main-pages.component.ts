import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/app/environments/environments';
import { Producto } from 'src/app/pages/interfaces/producto';


@Component({
  selector: 'app-main-pages',
  templateUrl: './main-pages.component.html'
})
export class MainPagesComponent {
  productos: Producto[] | undefined;


  constructor(public http: HttpClient) {
    this.getData();
  }
  async getData() {
    this.http
      .get<any>(environment.apiUrl + 'products')
      .subscribe((res) => {
        res.map(({ id, title, price, description, category, image }: Producto) => {
          return {
            id: id,
            title: title,
            price: price,
            description: description,
            category: category,
            image: image
          };
        });
        console.table(res);
        console.log(typeof res)
      });




  }



}

