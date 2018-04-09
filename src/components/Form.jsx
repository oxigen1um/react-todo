import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

class Form extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: ''
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    let title = event.target.value;
    
    this.setState({title});
  }
  
  handleSubmit(event) {
    event.preventDefault();
    let title = this.state.title;
    console.log(this.props);
    
    if (title) {
      this.props.onAdd(title);
      this.setState({title: ''});
    }
  }
  
  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <input type="text" 
          value={this.state.title} 
          placeholder="Что нужно сделать?" 
          onChange={this.handleChange}/>
      
      <Button type="submit">Добавить</Button>
      </form>
    );
  }
}

Form.propTypes = {
  onAdd: PropTypes.func.isRequired
};

export default Form;