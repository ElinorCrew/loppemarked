import React, { Component, PropTypes } from 'react';
import Route from 'react-router';
import Footer from 'components/Footer';
import Navigation from 'components/Navigation';

class App extends Component {
   constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <Navigation />
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default App;
