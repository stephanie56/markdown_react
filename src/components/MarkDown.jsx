import React from 'react';

export default class MarkDown extends React.Component {

  render(){
    return(
      <div className="markdown">
        <div>{this.props.text}</div>
      </div>

    )

  }
}
