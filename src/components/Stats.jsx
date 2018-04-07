import React from 'react';
import PropTypes from 'prop-types';

function Stats(props) {
  let total = props.todos.lenght;
  let completed = props.todos.filter(todo => todo.completed).length;
  let pending = total - completed;
  console.log(total);
  return(
    <table className="stats">
      <tbody>
        <tr>
          <th>Tasks quantity:</th>
        <td>{total}</td>
        </tr>
        <tr>
          <th>Done:</th>
        <td>1</td>
        </tr>
        <tr>
          <th>Pendig:</th>
        <td>2</td>
        </tr>
      </tbody>
    </table>
  );
}

Stats.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Stats;