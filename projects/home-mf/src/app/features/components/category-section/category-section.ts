import { Component } from '@angular/core';
import { SharedMaterialModule } from 'shared-material';

@Component({
  selector: 'app-category-section',
  standalone: true,
  imports: [
    SharedMaterialModule,
  ],
  templateUrl: './category-section.html',
  styleUrl: './category-section.scss',
})
export class CategorySection {}
