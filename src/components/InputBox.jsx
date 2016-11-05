import React from 'react';
export default class InputBox extends React.Component {

  handleChange(e){
    console.log(e.target.value)
  }

  render(){
    return(
      <div>
        <textarea onChange={this.handleChange.bind(this)}/>

      </div>

    )

  }

}
