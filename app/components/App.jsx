import React, { Component, PropTypes } from 'react';
import Route from 'react-router';

class App extends Component {
   constructor(props){
    super(props);
    moment.locale('nb');
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
