import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ShowInformationAccount {
    isShowInformation: boolean;
}

const initialState: ShowInformationAccount = {
    isShowInformation: false,
};

const showInformationSlice = createSlice({
    name: "show",
    initialState: initialState,
    reducers: {
        showInformation: function (state) {
            state.isShowInformation = !state.isShowInformation;
        },
    },
});

export const showInformationAction = showInformationSlice.actions;
export default showInformationSlice;
