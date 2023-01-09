import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
    id: number;
    price: number;
    quantity: number;
    totalPrice: number;
    name: string;
}

export interface CartState {
    itemsList: Array<CartItem>;
    totalQuantity: number;
    showCart: boolean;
    changed: boolean;
}

const initialState: CartState = {
    itemsList: [],
    totalQuantity: 0,
    showCart: false,
    changed: false,
};

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: function (state, action: PayloadAction<CartItem>) {
            const newItem = action.payload;
            const existingItem = state.itemsList.find(function (item) {
                return item.id === newItem.id;
            });
            if (existingItem) {
                existingItem.quantity;
                existingItem.price = existingItem.price + newItem.price;
            } else {
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name,
                });
            }
        },
    },
});

export const cartAction = cartSlice.actions;

export default cartSlice;
