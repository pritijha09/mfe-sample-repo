import { CartItem } from "./cart.model";

export interface CartState {
    items: CartItem[]
}

export const initialState: CartState = {
    items: []
}