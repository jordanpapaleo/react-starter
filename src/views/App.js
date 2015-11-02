import React, { Component } from 'react'
import AppActions from '../actions/AppActions.js'
import AppStore from '../stores/AppStore.js'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: 'App'
    }

    this.test = this.test.bind(this)
    this.updateTitle = this.updateTitle.bind(this)
  }

  componentWillMount () {
    AppStore.addChangeListener(this.updateTitle)
  }

  componentWillUnmount () {
    AppStore.removeChangeListener(this.updateTitle)
  }

  updateTitle (title) {
    this.setState({ title })
  }

  test () {
    AppActions.test('ABCD')
  }

  render () {
    return (
      <div onClick={this.test}>{this.state.title}</div>
    )
  }
}

export default App
