import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: "Hello World"
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log('This was activated');
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}

export default App;