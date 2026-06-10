import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
export class CategorySection {

  constructor(private router: Router) {}

  redirectToCategory() {
    // Implement navigation logic here, e.g., using Angular Router
    console.log(`Redirecting to category: birthday`);
  }
}
