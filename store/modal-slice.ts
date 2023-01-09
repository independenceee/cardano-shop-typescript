import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ModalState {
    isShowModal: boolean;
}

const initialState: ModalState = {
    isShowModal: false,
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        showModalOptions: function (state) {
            state.isShowModal = true;
        },

        hiddenModalOptions: function (state) {
            state.isShowModal = false;
        },
    },
});

export const modalActions = modalSlice.actions;
export default modalSlice;
