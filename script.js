const initialState = `# This is a heading.
## This is a sub-heading.

Heres some code, \`<p></p>\`, between 2 backticks.

As for multi-line code:

\`\`\`
function anExample(firstParam, secondParam) {
  return firstParam + second Param;
}
\`\`\`

You can make text **bold**, _italic_ or **_both_**.

~~Cross text out~~, use [links](https://github.com/mateorinland) and also

> Block Quotes

Tables are at your disposal:

Header 1 | Header 2 | Header 3
------------ | ------------- | -------------
The text you | put inside can be of | varying size
It'll fit it | it all | neatly and automatically

- As for lists,
  - You can use different bullets.
     - Depending on the indentation.


1. Numbered lists
1. are an option too
1. and you can just use pure "1."s in the markdown.

Lastly, images will be automatically fitted if they are too big:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

_Made by [Mateo Rinland](https://github.com/mateorinland) for the freeCodeCamp Front End Development Libraries course. Thanks, fCC!_
`;

class App extends React.Component {
  state = {
    text: initialState
  }
  
  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }
  
  render() {
    const { text } = this.state;
    
    const markdown = marked.parse(text, {breaks: true});
    
    return(
    <div>
        <h2 className="text-center text-white m-4">Preview your Markdown!</h2>
        <div className="row">
          <div className="col-6">
            <h5 className="text-white">Enter your text in Markdown syntax:</h5>
            <textarea id="editor" className="form-control p-2"  value={text} onChange={this.handleChange}/>
          </div>
          <div className="col-6">
            <h5 className="text-white">See the result:</h5>
            <div id="preview" className="preview-box rounded p-2" dangerouslySetInnerHTML={{__html: markdown}}/>
          </div>
        </div>
    </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));
