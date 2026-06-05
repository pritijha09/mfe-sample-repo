import { Component } from '@angular/core';
import { SharedMaterialModule } from 'shared-material';

@Component({
  selector: 'app-trending-cakes',
  standalone: true,
  imports: [
    SharedMaterialModule,
  ],
  templateUrl: './trending-cakes.html',
  styleUrl: './trending-cakes.scss',
})
export class TrendingCakes {}
