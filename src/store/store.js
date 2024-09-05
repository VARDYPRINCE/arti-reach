// store.js
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Choose your storage engine
// import rootReducer from './reducers'; // Import your root reducer
import userReducer from "./slice/authSlice";
// import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
  // Specify the reducers you want to persist
  whitelist: ["user"], // In this example, we persist the 'user' reducer
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore redux-persist actions
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/REGISTER",
        ],
        // Ignore specific non-serializable values (like Date objects)
        ignoredPaths: ["register"],
      },
    }),
  // devTools: process.env.NODE_ENV !== 'production',
  // middleware: [thunk]
});
// export const store = configureStore(persistedReducer);
export const persistor = persistStore(store);
