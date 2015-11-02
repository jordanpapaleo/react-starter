import { Dispatcher } from 'flux'
import assign from 'react/lib/Object.assign'

const AppDispatcher = assign(new Dispatcher(), {
  handleViewAction (action) {
    console.log('AppDispatcher > action', action)

    this.dispatch({
      action,
      source: 'VIEW_ACTION'
    })
  }
})

console.info('AppDispatcher', AppDispatcher)

module.exports = AppDispatcher
