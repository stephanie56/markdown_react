import React from 'react';

import MarkDown from 'components/MarkDown.jsx' 
export default class InputBox extends React.Component {
  constructor(){
    super()
    this.state={
      text:"default state"
    }
  }

  handleChange(e){
    var newState = {text: e.target.value}
    this.setState(newState)
  }

  render(){
    return(
      <div className="inputbox">
        <textarea onChange={this.handleChange.bind(this)}/>
        <MarkDown text={this.state.text} />
      </div>

    )

  }

}
