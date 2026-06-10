import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedMaterialModule } from 'shared-material';
import { ProductReview } from '../product-review/product-review';
import { SimilarProducts } from '../similar-products/similar-products';
import { QuantitySelector } from '../../shared/quantity-selector/quantity-selector';
import { ProductGallery } from '../../shared/product-gallery/product-gallery';

@Component({
  selector: 'app-product-details',
  imports: [
    SharedMaterialModule,
    ProductReview,
    SimilarProducts,
    QuantitySelector,
    ProductGallery
  ],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails {
  private route = inject(ActivatedRoute);

  productId = '';

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      this.productId =
        params.get('id') ?? '';

      console.log(this.productId);

      // API call
      // GET /api/products/101

    });

  }
}
