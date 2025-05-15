import { Component, inject, OnInit, signal } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

export interface Product {
  category_name: string;
  product_name: string;
  image: string;
  price: number;
}

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, SidebarComponent, ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  title = 'UI_Task';

  private http = inject(HttpClient);
  products = signal<Product[]>([]);

  ngOnInit(): void {
    this.http
      .get<{data:Product[]}>(
        'https://api.pw.wintpay.com/api/v1/store/get-products-by-store/12'
      ) .pipe(map((res) => res.data))
      .subscribe({
        next: (resData) => {
          this.products.set(resData);
          console.log('Products', this.products());
        },
      });
  }
}
