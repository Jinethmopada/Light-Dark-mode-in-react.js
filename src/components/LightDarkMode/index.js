import {Component} from 'react'

import './index.css'

class Light extends Component {
  state = {isMode: 'dark'}

  onChangeMode = () => {
    this.setState(prevState => {
      if (prevState.isMode !== 'dark') {
        return {isMode: 'dark'}
      }
      return {isMode: 'light'}
    })
  }

  render() {
    const {isMode} = this.state
    return (
      <div className="bg-container">
        <div
          className={isMode === 'dark' ? 'dark-background' : 'Light-background'}
        >
          <h1 className={isMode === 'dark' ? 'light-heading' : 'dark-heading'}>
            Click To Change Mode
          </h1>

          <button className="button" type="button" onClick={this.onChangeMode}>
            {isMode === 'dark' ? 'Light' : 'Dark'} Mode
          </button>
        </div>
      </div>
    )
  }
}

export default Light
