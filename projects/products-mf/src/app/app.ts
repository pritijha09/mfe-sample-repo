import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { AppState } from 'shared-state';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App implements OnInit, OnDestroy {
  protected readonly title = signal('products-mf');
  private readonly appState = inject(AppState);
  user: any;
  constructor(private route: ActivatedRoute,
  ) {
    this.route.queryParams.subscribe(params => {
      console.log(params['category']);
    });

    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    const user = this.appState.user();
    console.log(user);

  }

   private userEventHandler = (event: Event) => {
    const customEvent = event as CustomEvent;
debugger
    this.user = customEvent.detail;

    console.log('Received User:', this.user);
  };

  ngOnInit() {
    document.addEventListener(
      'user-data',
      this.userEventHandler
    );
  }

  ngOnDestroy() {
    document.removeEventListener(
      'user-data',
      this.userEventHandler
    );
  }
}
