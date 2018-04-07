import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
  constructor() {
    super();
    
    this.state = {
      completed: false
    };
  }
  
  render() {
    return(
      <button className="checkbox icon">
        <i className="material-icons">{this.state.completed ? 'check_box' : 'check_box_outline_blank'}</i>
      </button>
    );
  }
}
 
 export default Checkbox;