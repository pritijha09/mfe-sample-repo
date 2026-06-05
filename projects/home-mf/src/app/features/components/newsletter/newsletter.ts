import { Component } from '@angular/core';
import { SharedMaterialModule } from 'shared-material';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [
    SharedMaterialModule,
  ],
  templateUrl: './newsletter.html',
  styleUrl: './newsletter.scss',
})
export class Newsletter {}
