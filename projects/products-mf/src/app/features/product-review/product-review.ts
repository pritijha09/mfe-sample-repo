import { Component, signal } from '@angular/core';
import { SharedMaterialModule } from 'shared-material';

@Component({
  selector: 'app-product-review',
  imports: [
    SharedMaterialModule
  ],
  templateUrl: './product-review.html',
  styleUrl: './product-review.scss',
})
export class ProductReview {
  reviews = signal([
  {
    id: 1,
    initial: 'P',
    name: 'Priti Jha',
    comment:
      'Amazing cake quality and timely delivery. Highly recommended.',
    date: '2 days ago',
    helpful: 12,
    images: [
      'https://placehold.co/100'
    ]
  },

  {
    id: 2,
    initial: 'R',
    name: 'Rahul Kumar',
    comment:
      'Fresh and delicious cake. Beautiful decoration.',
    date: '5 days ago',
    helpful: 8,
    images: [
      'https://placehold.co/100'
    ]
  }
]);
}
