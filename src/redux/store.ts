import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import rootReducer, { RootState } from './rootReducer';


// Store definition with redux-toolkit 
const store = configureStore({
    reducer: rootReducer,
  });
  
  export default store;

  // Async thunk action parameters type
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;