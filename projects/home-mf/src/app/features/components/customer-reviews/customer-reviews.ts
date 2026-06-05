import { Component } from '@angular/core';
import { SharedMaterialModule } from 'shared-material';

@Component({
  selector: 'app-customer-reviews',
  standalone: true,
  imports: [
    SharedMaterialModule,
  ],
  templateUrl: './customer-reviews.html',
  styleUrl: './customer-reviews.scss',
})
export class CustomerReviews {}
