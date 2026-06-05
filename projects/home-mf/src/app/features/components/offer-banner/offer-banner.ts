import { Component } from '@angular/core';
import { SharedMaterialModule } from 'shared-material';

@Component({
  selector: 'app-offer-banner',
  standalone: true,
  imports: [
    SharedMaterialModule,
  ],
  templateUrl: './offer-banner.html',
  styleUrl: './offer-banner.scss',
})
export class OfferBanner {}
