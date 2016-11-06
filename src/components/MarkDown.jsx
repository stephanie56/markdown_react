import React from 'react';
export default class MarkDown extends React.Component {

  render(){
    return(
      <div className="markdown">
        <p>the value is {this.props.text}</p>
      </div>

    )

  }
}
