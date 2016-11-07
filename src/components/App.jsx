import React from 'react';

import InputBox from 'components/InputBox.jsx'
import MarkDown from 'components/MarkDown.jsx'

export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      text:""
    }
  }

  handleUpdateState(newText){
    this.setState(
      {text: newText}
    )
  }

  render() {
    return (
      <div className="container">
        <InputBox updateParentState = {this.handleUpdateState.bind(this)} />
        <MarkDown text = {this.state.text} />
      </div>
    )
  }
}
