## Build a Markdown Previewer

Objective: Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/JXrLLE/.

App pane include
- input pane
- output pane

What app pane does:
1. import input and output pane
2. initiate state for the whole app. Empty string {content: ""}
3. Function updateparentstate(newcontent) return this.setstate() that use new content from input pane to update parent state
4. Pass updateparentstate() function to input pane
5. Pass this.state.content to output pane

Input pane include:
- textarea (onchange event trigger handlechange function)
- function handlechange() take event argument and return event target value
- handlechange(e){ var newcontent = e.target.value}

What input pane does:
- this.props.updateparentstate(newcontent)

What output pane does:
- input: this.props.content from parent pane
- output: dangerlyinnerhtml = marked(this.props.content)
