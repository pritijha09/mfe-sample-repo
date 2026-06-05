import { Component } from '@angular/core';
import { SharedMaterialModule } from 'shared-material';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [
    SharedMaterialModule,
  ],
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.scss',
})
export class HeroBanner {}
