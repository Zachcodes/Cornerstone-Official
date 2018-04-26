import React, {Component} from 'react';


class TestComponent1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dog: 'German Shepherd'
    }
  }

  render() {
    return (
      <div>
        <p>Hello!</p>
      </div>
    )
  }
}

export default TestComponent1;
