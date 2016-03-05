import React, { Component, PropTypes } from 'react';
import Route from 'react-router';
import moment from 'moment';
import Sidebar from 'components/Sidebar';

class App extends Component {
   constructor(props){
    super(props);
    moment.locale('nb');
  }

  render() {
    return (
      <div>
      <Sidebar />
      <div >
        {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
