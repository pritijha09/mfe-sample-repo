import { Component, Input } from '@angular/core';
import { Product } from '../../core/models/product.model';
import { SharedMaterialModule } from 'shared-material';

@Component({
  selector: 'app-product-card',
  imports: [
    SharedMaterialModule
  ],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  @Input({ required: true })
  product!: Product;
}
