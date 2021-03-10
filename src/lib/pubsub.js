export default class PubSub {
  events = {};  
  subscribe(event, callback) {
    if(!this.events.hasOwnProperty(event)) {
      this.events[event] = [];
    }
    
    return this.events[event].push(callback);
  }
  
  publish(event, data = {}) {
    if(!this.events.hasOwnProperty(event)) {
      return [];
    }
    console.log(this.events[event]);
    return this.events[event].map(callback => callback(data));
  }
}
