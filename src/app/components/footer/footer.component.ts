import { Component } from '@angular/core';
import { Facebook, Instagram, LucideAngularModule, Mail, MapPin, MoveRight, Phone, PhoneCall, Twitter } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  imports: [LucideAngularModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  readonly Phone = PhoneCall
  readonly Message = Mail
  readonly Map = MapPin
  readonly Right = MoveRight
  readonly Instagram = Instagram
  readonly Twitter = Twitter
  readonly Facebook = Facebook

}
