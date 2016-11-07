import React from 'react';
import marked from 'marked';

export default class MarkDown extends React.Component {

 handleMarkdown(text){
   var rawMarkup = marked(text)
   return {__html: rawMarkup}
 }

  render(){
    return(
        <div dangerouslySetInnerHTML={this.handleMarkdown(this.props.text)} />

    )

  }
}
