enum Status {
  PENDING = 'pending',
  FULFILLED = 'fulfilled',
  REJECTED = 'rejected',
}


class MyPromise implements IMyPromise {
  PromiseState: Status
  PromiseResult: any
  onFulfilledCallbacks: any[]
  onRejectedCallbacks: any[]

  constructor(func: TFunc) {
    this.PromiseState = Status.PENDING
    this.PromiseResult = null
    this.onFulfilledCallbacks = [] // 保存成功回调
    this.onRejectedCallbacks = [] // 保存失败回调
    // 捕获异常
    try {
      func(this.resolve.bind(this), this.reject.bind(this))
    } catch (err) {
      this.reject(err)
    }
  }

  resolve<T>(v:T) {
    // 如果状态为pending时变为fulfilled
    if (this.PromiseState === Status.PENDING) {
      this.PromiseState = Status.FULFILLED
      this.PromiseResult = v
      this.onFulfilledCallbacks.forEach((callback) => {
        callback(v)
      })
    }
  }

  reject<T>(v:T) {
    // 如果状态为pending时变为rejected
    if (this.PromiseState === Status.PENDING) {
      this.PromiseState = Status.REJECTED
      this.PromiseResult = v
      this.onRejectedCallbacks.forEach((callback) => {
        callback(v)
      })
    }
  }

  then(onFulfilled?: TOnFulfilled, onRejected?: TOnRejected) {
    // 两个参数不为undefined
    onFulfilled =
      typeof onFulfilled === 'function' ? onFulfilled : (value) => value
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (reason) => {
            throw reason
          }

    if (this.PromiseState === Status.PENDING) {
      this.onFulfilledCallbacks.push(() => {
        setTimeout(() => {
          onFulfilled!(this.PromiseResult)
        })
      })
      this.onRejectedCallbacks.push(() => {
        setTimeout(() => {
          onRejected!(this.PromiseResult)
        })
      })
    }
    // 一旦状改变后将不会重新改变状态
    if (this.PromiseState === Status.FULFILLED) {
      setTimeout(() => {
        onFulfilled!(this.PromiseResult)
      })
    }

    if (this.PromiseState === Status.REJECTED) {
      setTimeout(() => {
        onRejected!(this.PromiseResult)
      })
    }
  }
}

export default MyPromise
