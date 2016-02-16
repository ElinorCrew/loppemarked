import React from 'react';
import moment from 'moment';

class Divider extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
    <div className="ui horizontal divider">
      {this.props.name}
    </div>
      );
  }
}

export default Divider;
