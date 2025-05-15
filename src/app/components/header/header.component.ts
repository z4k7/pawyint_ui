import { Component } from '@angular/core';
import { LucideAngularModule, FileIcon, Search, Heart, ShoppingBag } from 'lucide-angular';
@Component({
  selector: 'app-header',
  imports: [LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 readonly Search = Search;
 readonly Heart = Heart;
 readonly ShoppingBag = ShoppingBag;
}
