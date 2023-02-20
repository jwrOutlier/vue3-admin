type TResolve = <T>(result: T) => void
type TReject = <T>(reason: T) => void

type TFunc = (resolve: TResolve, reject: TReject) => void

type TOnFulfilled = <T>(result:T) => void

type TOnRejected =<T>(reason: T) => void

enum Status {
  PENDING = 'pending',
  FULFILLED = 'fulfilled',
  REJECTED = 'rejected',
}

interface IMyPromise {
  PromiseState: Status
  PromiseResult: any
  onFulfilledCallbacks: any[]
  onRejectedCallbacks: any[]

  resolve<T>(result:T): void
  reject<T>(reason:T): void
  then(onFulfilled?: TOnFulfilled, onRejected?: TOnRejected):void
}
