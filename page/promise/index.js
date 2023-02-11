function Promise(executor){
  // 属性
  this.PromiseState = 'pending';
  this.PromiseResult =  null;
  // 存异步回调函数
  this.callback={}
  // 保存实例对象，避免下面使用this指向window
  const self = this;

  // 
  function resolve(data){
    // 确保状态只执行一次
    if(self.PromiseState!=='pending') return;
    // 1.修改对象状态
    self.PromiseState = 'fulfilled'
    // 2.设置对象结果
    self.PromiseResult =  data;
    // 执行异步回调函数
    if(self.callback.onResolved){
      self.callback.onResolved(data)
    }
  }

  //
  function reject(data){
    // 确保状态只执行一次
    if(self.PromiseState!=='pending') return;
    // 1.修改对象状态
    self.PromiseState = 'rejected'
    // 2.设置对象结果
    self.PromiseResult =  data;
    // 执行异步回调函数
    if(self.callback.onRejected){
      self.callback.onRejected(data)
    }
  }

  // 抛出异常
  try{
    // 同步调用 执行器函数
    executor(resolve,reject)
  }catch(e){
    reject(e)
  }

}

Promise.prototype.then=function(onResolved,onRejected){
  if(this.PromiseState == 'fulfilled'){
    onResolved(this.PromiseResult)
  }
  if(this.PromiseState == 'rejected'){
    onRejected(this.PromiseResult)
  }
  // 判断pending状态 处理异步
  if(this.PromiseState == 'pending'){
    this.callback={
      onResolved,onRejected
    }
  }
}