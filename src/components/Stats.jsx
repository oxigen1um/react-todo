import React from 'react';
import PropTypes from 'prop-types';

function Stats(props) {
  let total = props.todos.length;
  let completed = props.todos.filter(todo => todo.completed).length;
  let pending = total - completed;
  return(
    <table className="stats">
      <tbody>
        <tr>
          <th>Tasks quantity:</th>
        <td>{total}</td>
        </tr>
        <tr>
          <th>Done:</th>
        <td>{completed}</td>
        </tr>
        <tr>
          <th>Pendig:</th>
        <td>{pending}</td>
        </tr>
      </tbody>
    </table>
  );
}

Stats.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Stats;