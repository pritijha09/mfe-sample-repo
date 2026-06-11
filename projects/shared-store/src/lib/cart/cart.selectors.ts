import {
  createSelector
} from '@ngrx/store';
import { AppState } from './app.state';

export const selectCartState =
  (state: AppState) =>
    state.cart;

export const selectCartItems =
  createSelector(

    selectCartState,

    state => state.items
  );

export const selectCartCount =
  createSelector(

    selectCartItems,

    items =>

      items.reduce(

        (total, item) =>

          total + item.quantity,

        0
      )
  );

export const selectCartTotal =
  createSelector(

    selectCartItems,

    items =>

      items.reduce(

        (total, item) =>

          total +
          item.price *
          item.quantity,

        0
      )
  );