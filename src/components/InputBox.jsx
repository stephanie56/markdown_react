import React from 'react';

export default class InputBox extends React.Component {
  handleChange(e)
  {
    this.props.updateParentState(e.target.value)
  }

  render()
  {
    return
    (<div className="inputbox">
        <textarea onChange={this.handleChange.bind(this)}/>
      </div>)
  }

}
