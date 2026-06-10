import { Component } from '@angular/core';
import { SharedMaterialModule } from 'shared-material';

@Component({
  selector: 'app-price-tag',
  imports: [
    SharedMaterialModule
  ],
  templateUrl: './price-tag.html',
  styleUrl: './price-tag.scss',
})
export class PriceTag {}
