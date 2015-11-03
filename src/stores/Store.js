import EventEmitter from 'events'
import AppDispatcher from '../dispatchers/AppDispatcher'

const CHANGE = 'CHANGE'
export default class Store extends EventEmitter {
  constructor () {
    super()
  }

  subscribe (actionSubscribe) {
    this._dispatchToken = AppDispatcher.register(actionSubscribe())
  }

  get dispatchToken () {
    return this._dispatchToken
  }

  emitChange (ev) {
    console.log('Emitting change')
    this.emit(CHANGE, ev)
  }

  addChangeListener (cb) {
    this.on(CHANGE, cb)
  }

  removeChangeListener (cb) {
    this.removeListener(CHANGE, cb)
  }
}
