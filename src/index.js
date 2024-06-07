import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';

//basic example of redux  

const root = ReactDOM.createRoot(document.getElementById('root'));

//example 1:

// const reducer = (state = 0, action) => {
//   if (action.type === 'INCREMENT') {
//     return state + 1;
//   } else if (action.type === 'DECREMENT') {
//     return state - 1;
//   }

//   return state;
// };

// const store = createStore(reducer);

// store.subscribe(() => {
//   console.log('current state', store.getState());
// });

// store.dispatch({
//   type: 'INCREMENT'
// });

// store.dispatch({
//   type: 'INCREMENT'
// });

// store.dispatch({
//   type: 'DECREMENT'
// });


// example two using switch case with payload

const reducer = (state = 0, action)=>{
  switch (action.type) {

    case 'INCREMENT':
      return state + action.payload;

    case 'DECREMENT':
      return state - action.payload;

    default : 
      return state;
  };
}

const store = createStore(reducer);

store.subscribe(() => {
  console.log('current state', store.getState());
})

store.dispatch({
  type: 'INCREMENT',
  payload: 5
});

store.dispatch({
  type: 'INCREMENT',
  payload: 10
});

store.dispatch({
  type: 'DECREMENT',
  payload: 10
})

root.render(
  <React.StrictMode>
    <h1>
        current state {store.getState()}
    </h1>
  </React.StrictMode>
);

