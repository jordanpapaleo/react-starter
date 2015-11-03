import AppConstants from '../constants/AppConstants'
import Store from './Store.js'

class AppStore extends Store {
  constructor () {
    super()
    this.subscribe(() => this._registerToActions.bind(this))
    this.testData = '1234'
  }

  _registerToActions (dispatch) {
    console.log('AppStore > dispatch', dispatch)
    const { type, value } = dispatch.action

    switch (type) {
      case AppConstants.TEST:
        this.emitChange(value)
        break
      default:
        break
    }
  }

  getTestData () {
    return this.testData
  }
}

const appStore = new AppStore()

export default appStore
