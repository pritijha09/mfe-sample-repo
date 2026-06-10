import { Component, signal } from '@angular/core';
import { SharedMaterialModule } from 'shared-material';
import { ProductCard } from '../../shared/product-card/product-card';
import { FilterSidebar } from '../../shared/filter-sidebar/filter-sidebar';
import { Product } from '../../core/models/product.model';

@Component({
  selector: 'app-category-product',
  imports: [
    SharedMaterialModule,
    FilterSidebar,
    ProductCard
  ],
  templateUrl: './category-product.html',
  styleUrl: './category-product.scss',
})
export class CategoryProduct {
     products = signal<Product[]>([
    {
      id: 1,
      name: 'Chocolate Truffle Cake',
      category: 'Birthday',
      price: 699,
      originalPrice: 899,
      rating: 4.9,
      reviewCount: 245,
      imageUrl:
        'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
      description:
        'Rich chocolate sponge layered with premium truffle cream.',
      isBestSeller: true,
      isEggless: false,
      weight: '1 Kg'
    },

    {
      id: 2,
      name: 'Red Velvet Cake',
      category: 'Anniversary',
      price: 899,
      originalPrice: 1099,
      rating: 4.8,
      reviewCount: 180,
      imageUrl:
        'https://images.unsplash.com/photo-1562440499-64c9a111f713',
      description:
        'Soft red velvet sponge with cream cheese frosting.',
      isBestSeller: true,
      isEggless: true,
      weight: '1 Kg'
    },

    {
      id: 3,
      name: 'Black Forest Cake',
      category: 'Birthday',
      price: 599,
      originalPrice: 799,
      rating: 4.7,
      reviewCount: 310,
      imageUrl:
        'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3',
      description:
        'Classic black forest cake with cherries and cream.',
      isBestSeller: false,
      isEggless: false,
      weight: '500 gm'
    },

    {
      id: 4,
      name: 'Butterscotch Delight',
      category: 'Wedding',
      price: 799,
      originalPrice: 999,
      rating: 4.6,
      reviewCount: 140,
      imageUrl:
        'https://images.unsplash.com/photo-1535141192574-5d4897c12636',
      description:
        'Crunchy butterscotch cake with caramel frosting.',
      isBestSeller: true,
      isEggless: true,
      weight: '1 Kg'
    },

    {
      id: 5,
      name: 'Pineapple Cake',
      category: 'Birthday',
      price: 549,
      originalPrice: 699,
      rating: 4.5,
      reviewCount: 120,
      imageUrl:
        'https://images.unsplash.com/photo-1621303837174-89787a7d4729',
      description:
        'Fresh pineapple chunks with whipped cream.',
      isBestSeller: false,
      isEggless: true,
      weight: '500 gm'
    },

    {
      id: 6,
      name: 'Designer Unicorn Cake',
      category: 'Kids',
      price: 1499,
      originalPrice: 1799,
      rating: 5,
      reviewCount: 85,
      imageUrl:
        'https://images.unsplash.com/photo-1551024601-bec78aea704b',
      description:
        'Colorful unicorn-themed designer cake.',
      isBestSeller: true,
      isEggless: false,
      weight: '2 Kg'
    }
  ]);
}
