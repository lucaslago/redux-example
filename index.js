const createStore = require('./lib/redux').createStore;
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};
const listener = _ => console.log('State has changed!');
const store = createStore(counterReducer);
const subscribedListener = store.subscribe(listener);

const incrementAction = { type: 'INCREMENT' };
const decrementAction = { type: 'DECREMENT' };
const incrementCounter = _ => store.dispatch(incrementAction);
const decrementCounter = _ => store.dispatch(decrementAction);
const logCurrentState = _ => console.log('Current state: ', store.getState());

logCurrentState();
console.log('Incrementing counter...');
incrementCounter();
logCurrentState();
console.log('Decrementing counter...');
decrementCounter();
logCurrentState();
