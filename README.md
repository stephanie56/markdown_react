## Build a Markdown Previewer

Objective: Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/JXrLLE/.

App pane include
- InputBox pane
- MarkDown pane

What App pane does:
- Import InputBox and MarkDown pane
- Initiate state for the whole app. Empty object  {text: ""}
- Function handleUpdateState(newText) return this.setstate() that takes newText from InputBox  pane to update parent state
- Pass handleUpdateState() function as a prop updateParentState() to InputBox pane
- Pass this.state.text as a prop text to MarkDown  pane

What InputBox pane does:
- textarea (onChange event triggers handleChange() function)
- function handleChange() take event argument and pass event target value to prop this.props.updateParentState() function
- handleChange(e){
  this.props.updateParentState(e.target.value)
}

What MarkDown pane does:
- get this.props.text from parent App pane
- output: dangerlyinnerhtml = marked(this.props.text)
