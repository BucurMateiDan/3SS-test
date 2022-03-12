import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
  },
});

// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from '../reducer'; 

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;