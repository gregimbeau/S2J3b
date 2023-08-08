// store.js

import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'; // Utilise localStorage par défaut
import userReducer from "./userReducer";
import skillsReducer from "./skillsReducer";

const rootReducer = combineReducers({
  user: userReducer,
  skills: skillsReducer,
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "skills"],  // Liste des réducteurs que vous souhaitez persister
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);