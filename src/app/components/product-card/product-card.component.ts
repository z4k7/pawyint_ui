import { Component, input } from '@angular/core';
import { LucideAngularModule, Trash2 } from 'lucide-angular';
import { Product } from '../../app.component';

@Component({
  selector: 'app-product-card',
  imports: [LucideAngularModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  product = input<Product>();

  readonly Trash = Trash2;
}
