import { Component } from '@angular/core';
import { SharedMaterialModule } from 'shared-material';

@Component({
  selector: 'app-empty-products',
  imports: [
    SharedMaterialModule,
  ],
  templateUrl: './empty-products.html',
  styleUrl: './empty-products.scss',
})
export class EmptyProducts {}
