import { Component, inject } from '@angular/core';
import { SharedMaterialModule } from 'shared-material';
import { CartStore } from 'shared-state';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    SharedMaterialModule,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  public readonly cartStore = inject(CartStore);
}
