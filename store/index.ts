import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modal-slice";
import showInformationSlice from "./show-slice";
export const store = configureStore({
    reducer: {
        modal: modalSlice.reducer,
        show: showInformationSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
