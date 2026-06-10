import { Component, inject, Input } from '@angular/core';
import { Product } from '../../core/models/product.model';
import { SharedMaterialModule } from 'shared-material';
import { CartStore } from 'shared-state';

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

   private readonly cartStore = inject(CartStore);

  addToCart(product: Product){
    //add to cart
    this.cartStore.addToCart({
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      quantity: 1,
      imageurl: this.product.imageUrl
    })
  }
}
