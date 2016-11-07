import React from 'react';

export default class MarkDown extends React.Component {

 var marked = require('marked')
 handleMarkdown(){
 marked()
 }

  render(){
    return(
      <div className="markdown">
        <div>{this.props.text}</div>
      </div>

    )

  }
}
