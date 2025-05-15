import { Component } from '@angular/core';
import { Bell, Box, CreditCard, Heart, LucideAngularModule, MapPin, Package, Settings, User } from 'lucide-angular';

@Component({
  selector: 'app-sidebar',
  imports: [LucideAngularModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  readonly User = User
  readonly Order = Package
  readonly Heart = Heart
  readonly Map = MapPin
  readonly Card = CreditCard
  readonly Notification = Bell 
  readonly Settings = Settings

}
