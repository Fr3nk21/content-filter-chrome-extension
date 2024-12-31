import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";

// This tells Redux to use the browser's localStorage to save our data
import storage from "redux-persist/lib/storage";

// ! This imports the rules for how we want to handle our blocked websites data. I curruntly don't have anything like that.
import blockedWebsitesReducer from "./slices/blockedWebsitesSlice";

// This is a setting object that tells Redux how to save the data
const persistConfig = {
  key: "root", // 'root' is the name we give to the saved data in localStorage
  storage, // This tells Redux to use localStorage
  whitelist: ["websites"], // This tells Redux to save only the 'websites' part of the data
};

// This adds the ability to save data to the reducer
const persistedReducer = persistReducer(persistConfig, blockedWebsitesReducer);

// This creates the Redux store, like a filing cabinet for the app's data
export const store = configureStore({
  // This tells Redux what data we want to store
  reducer: {
    blockedWebsites: persistedReducer,
  },
  // This is some technical setup that Redux needs to save the data properly
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // This turns off a warning that is not necessary
      serializableCheck: false,
    }),
});

// Creates a system that automatically saves our store data to localStorage
export const persistor = persistStore(store);

// These help TypeScript understand the data structure
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
