import React from 'react'
import { Link } from 'react-router'


export default React.createClass({
  getInitialState(){
    return{
      isOpen: false,
      closeModal: this.props
    }
  },
  handleOnClick(e){
    this.setState(
    {
      isOpen: true,
    }
    )
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal isOpen={this.state.open}
      </div>
    )
  }

  }
})
