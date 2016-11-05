import React from 'react';

import InputBox from 'components/InputBox.jsx'
import MarkDown from 'components/MarkDown.jsx'

export default class App extends React.Component {
  render() {

    return (
      <div>
        <InputBox />
        <MarkDown />
      </div>
    )
  }
}
