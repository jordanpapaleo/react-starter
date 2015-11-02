import AppConstants from '../constants/AppConstants'
import AppDispatcher from '../dispatchers/AppDispatcher'

var AppActions = {
  test (value) {
    console.log('AppActions > value', value)
    AppDispatcher.handleViewAction({
      value,
      type: AppConstants.TEST
    })
  }
}

export default AppActions
