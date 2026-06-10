import { Component } from '@angular/core';
import { SharedMaterialModule } from 'shared-material';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    SharedMaterialModule,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
