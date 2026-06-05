import { Component } from '@angular/core';
import { SharedMaterialModule } from 'shared-material';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    SharedMaterialModule,
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {}
