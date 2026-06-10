import { computed, Injectable, signal } from "@angular/core";

export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    imageurl: string;
}
@Injectable({
    providedIn: 'root'
})

export class CartStore {
    private readonly cartItems = signal<CartItem[]>([]);
    readonly items = this.cartItems.asReadonly();

    readonly cartCount =
    computed(() =>
      this.cartItems().reduce(
        (total, item) =>
          total + item.quantity,
        0
      )
    );

    readonly cartTotal =
    computed(() =>
      this.cartItems().reduce(
        (total, item) =>
          total + (item.price * item.quantity),
        0
      )
    );

    addToCart(product: CartItem): void {

    const items = this.cartItems();

    const existingItem =
      items.find(
        item => item.id === product.id
      );

    if (existingItem) {

      this.cartItems.update(items =>
        items.map(item =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  item.quantity + 1
              }
            : item
        )
      );

      return;
    }

    this.cartItems.update(items => [
      ...items,
      product
    ]);
  }

  removeItem(id: number): void {

    this.cartItems.update(items =>
      items.filter(
        item => item.id !== id
      )
    );
  }

  clearCart(): void {

    this.cartItems.set([]);
  }
    
}