import { Component, signal } from '@angular/core';
import { ProductCard } from '../../shared/product-card/product-card';

@Component({
  selector: 'app-similar-products',
  imports: [
    ProductCard
  ],
  templateUrl: './similar-products.html',
  styleUrl: './similar-products.scss',
})
export class SimilarProducts {
  similarProducts = signal([
    {
      id: 1,
      name: 'Red Velvet Cake',
      price: 899,
      originalPrice: 1099,
      rating: 4.9,
      reviewCount: 240,
      imageUrl:
        'https://images.unsplash.com/photo-1562440499-64c9a111f713?w=600',
      description:
        'Premium red velvet cake',
      isBestSeller: true,
      isEggless: true,
      weight: '1 Kg'
    },

    {
      id: 2,
      name: 'Black Forest Cake',
      price: 699,
      originalPrice: 899,
      rating: 4.8,
      reviewCount: 180,
      imageUrl:
        'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600',
      description:
        'Classic black forest delight',
      isBestSeller: false,
      isEggless: false,
      weight: '1 Kg'
    },

    {
      id: 3,
      name: 'Butterscotch Cake',
      price: 799,
      originalPrice: 999,
      rating: 4.7,
      reviewCount: 160,
      imageUrl:
        'https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=600',
      description:
        'Crunchy butterscotch cake',
      isBestSeller: true,
      isEggless: true,
      weight: '1 Kg'
    },

    {
      id: 4,
      name: 'Pineapple Cake',
      price: 599,
      originalPrice: 749,
      rating: 4.6,
      reviewCount: 120,
      imageUrl:
        'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600',
      description:
        'Fresh pineapple cream cake',
      isBestSeller: false,
      isEggless: true,
      weight: '500 gm'
    }
  ]);
}
