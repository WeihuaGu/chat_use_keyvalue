function Observer () {
   this.id=""
};

// 添加订阅
Observer.prototype.setid = (id)=> {
	this.id=id
};

// 移除订阅
Observer.prototype.getid = (observer)=> {
	return this.id
};

Observer.prototype.getNotify = (notify)=> {
  
};
module.exports.default = Observer
