import React, { Component, PropTypes } from 'react';
import Route from 'react-router';
import moment from 'moment';

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
