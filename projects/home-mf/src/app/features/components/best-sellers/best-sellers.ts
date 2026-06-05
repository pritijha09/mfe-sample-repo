import { Component } from '@angular/core';
import { SharedMaterialModule } from 'shared-material';

@Component({
  selector: 'app-best-sellers',
  standalone: true,
  imports: [
    SharedMaterialModule,
  ],
  templateUrl: './best-sellers.html',
  styleUrl: './best-sellers.scss',
})
export class BestSellers {}
