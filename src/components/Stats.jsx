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
          <th>Количество задач:</th>
        <td>{total}</td>
        </tr>
        <tr>
          <th>Выполнено:</th>
        <td>{completed}</td>
        </tr>
        <tr>
          <th>Не выполнено:</th>
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