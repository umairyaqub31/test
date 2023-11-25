import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import generalReducer from './reducers/generalReducer';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user', 'main'],
};

const reducers = combineReducers({
  user: userReducer,
  general: generalReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: {
    root: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export const persistor = persistStore(store);
