export class Store {
  constructor(reducer, state) {
    this._state = state;
    this._reducer = reducer;
    this.dispatch = this.dispatch.bind(this);
    this._calbacks = [];
  }
  
  get state() {
    return this._state;
  }
  
  dispatch(action) {
    this._state = this._reducer(this._state, action);
    this._calbacks.forEach(callback => callback());
  }

  subscribe(calback) {
    this._calbacks.push(calback);
    return () => this._calbacks = this._calbacks.filter(cb => cb !== calback);
  }

}