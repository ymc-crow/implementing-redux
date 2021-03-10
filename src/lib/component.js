import store from '../store/index.js';

export default class Component {
  constructor(props = {}) {    
    store.events.subscribe('stateChange', () =>   this.render());
    
    if(props.hasOwnProperty('element')) {
      this.element = props.element;
    }
  }
}
