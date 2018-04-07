import React from 'react';
import PropTypes from 'prop-types';

function Checkbox(props) {
  return(
    <button className="checkbox icon">
      <i className="material-icons">{props.completed ? 'check_box' : 'check_box_outline_blank'}</i>
    </button>
  );
}

Checkbox.propTypes = {
  completed: PropTypes.bool.inRequired
};
 
 export default Checkbox;