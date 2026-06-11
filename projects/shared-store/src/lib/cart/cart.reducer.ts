import {
  createReducer,
  on
} from '@ngrx/store';
import { initialState } from './cart.state';
import { addToCart, clearCart, removeFromCart } from './cart.actions';

export const cartReducer = createReducer(
    initialState,
    on(addToCart, (state, {item}) => {
        const existingItem = state.items.find(
            p=> p.id === item.id
        );

        if(existingItem) {
            return {
                ...state,
                items: state.items.map(
                    product => 
                        product.id === item.id ? {
                            ...product,
                            quantity: product.quantity + 1
                        }
                        : product
                )
            };
        }

        return {
            ...state,
            items: [
                ...state.items,
                item
            ]
        };
    }),

    on(removeFromCart, (state, { productId }) => ({

    ...state,

    items: state.items.filter(
      item =>
        item.id !== productId
    )
  })),

  on(clearCart, state => ({

    ...state,

    items: []
  }))
)