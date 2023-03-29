import { configureStore} from "@reduxjs/toolkit";
import userSlice from "./userSlice";
export const store = configureStore({
    reducer: {
        userSlice
    }
})

export const persistor = persistStore(store)

