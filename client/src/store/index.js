import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authService from "./services/authService";
import authReducer from "./reducers/authReducer";
import categoryService from "./services/categoryService";
import globalReducer from "./reducers/globalReducer";

const Store = configureStore({
    reducer: {
        [authService.reducerPath]: authService.reducer,
        [categoryService.reducerPath] : categoryService.reducer,
        "authReducer" : authReducer,
        "globalReducer": globalReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([categoryService.middleware])
});

export default Store;