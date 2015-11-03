import React, { Component } from 'react'
import AppActions from '../actions/AppActions.js'
import AppStore from '../stores/AppStore.js'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: AppStore.getTestData()
    }

    this.test = this.test.bind(this)
  }

  componentWillMount () {
    this.testStore = AppStore.addChangeListener((blar) => {
      this.setState({
        title: blar
      })
      console.log('TEST made it', blar)
    })
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
