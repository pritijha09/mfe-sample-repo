import { Component } from '@angular/core';
import { SharedMaterialModule } from 'shared-material';

@Component({
  selector: 'app-custom-cake',
  standalone: true,
  imports: [
    SharedMaterialModule,
  ],
  templateUrl: './custom-cake.html',
  styleUrl: './custom-cake.scss',
})
export class CustomCake {}
