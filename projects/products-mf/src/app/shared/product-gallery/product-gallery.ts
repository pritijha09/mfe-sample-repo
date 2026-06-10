import { Component, signal } from '@angular/core';
import { SharedMaterialModule } from 'shared-material';

@Component({
  selector: 'app-product-gallery',
  imports: [
    SharedMaterialModule
  ],
  templateUrl: './product-gallery.html',
  styleUrl: './product-gallery.scss',
})
export class ProductGallery {
  images = signal([
    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800',
    'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800',
    'https://images.unsplash.com/photo-1562440499-64c9a111f713?w=800',
    'https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=800'
  ]);

  selectedImage = signal(this.images()[0]);

  changeImage(image: string): void {
    this.selectedImage.set(image);
  }
}
