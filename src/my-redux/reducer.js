import { INCREMENT, DECREMENT } from "./types";
import { incrementAction, decrementtAction } from "./actions";
import { Store } from "./Store";
import { createStore } from "./create-store";

const initialState = {
  count: 0
}

function reducer(state = initialState, { type }) {
  switch (type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log('Action',store.getState()));
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(decrementtAction());
