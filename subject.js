function Subject () {
  this.listeners = {}

};

// 添加订阅
Subject.prototype.subscribe = (observer)=> {
  this.listeners[observer.id]=observer
  
};

// 移除订阅
Subject.prototype.removeSubscribe = (observer)=> {
  
};

Subject.prototype.notify = function (message) {
  for (var key in this.listeners) {
　　var observer = this.listeners[key]
    observer.getNotify(message)
  }
  
};
module.exports.default = Subject
