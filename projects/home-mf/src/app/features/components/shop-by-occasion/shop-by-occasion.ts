import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { SharedMaterialModule } from 'shared-material';

@Component({
  selector: 'app-shop-by-occasion',
  imports: [
    SharedMaterialModule,
  ],
  templateUrl: './shop-by-occasion.html',
  styleUrl: './shop-by-occasion.scss',
})
export class ShopByOccasion {

  constructor(private router: Router) {}

  redirectToCategory(category:any) {
    debugger
    console.log('Redirecting to category:', category);
    // Implement navigation logic here, e.g., using Angular Router
   this.router.navigate(['/products']);
  }
}
