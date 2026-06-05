import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ButtonComponent } from 'shared-ui';
import { AppState } from 'shared-state';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  protected readonly title = signal('shell-app');
  private readonly router = inject(Router);
  private readonly appState = inject(AppState);

  onProducts() {
    this.router.navigate(['/products'], {
    queryParams: {
      category: 'electronics'
    }
   });
  }

  sendDataToRemoteApp() {
    this.router.navigate(['/products', 1000]);
  }

  sendDataToRemoteAppToAppState() {
    this.appState.setUser({ id: 1, name: 'Priti', email: 'priti@example.com' });
    this.router.navigate(['/products']);
  }

  sendDataToRemoteAppUsingEventBus() {
    this.router.navigate(['/products']);
    setTimeout(() => {
  document.dispatchEvent(
    new CustomEvent('sendData', {
      detail: {
        message: 'Hello'
      }
    })
  );
}, 1000);
  }

  goToAuth() {
    this.router.navigate(['/auth']);
  }
}
