  import React from 'react';
  import PropTypes from 'prop-types';
  
  import Header from './components/Header';
  import Todo from './components/Todo';
  
  function App(props) {
    console.log(props);
    return (
      <main>
        
        <Header title={props.title}/>
      
        <section className="todo-list">
          <Todo title={"Изучить JS"} completed={true} />
          <Todo title={"Изучить React"} completed={false} />
        </section>
      </main>
    );
  }
  
  App.propTypes = {
    title: PropTypes.string
  };
  
  App.defaultProps = {
    title: 'React Todo'
  };
  
  export default App;