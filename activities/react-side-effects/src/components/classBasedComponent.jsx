import React from "react";
import Todos from "./Todos";
export default class ClassInput extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      todos: [],
      inputVal: "",
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this)
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state, 
      inputVal: e.target.value,
    }))
  }

  deleteTodo(e) {
    this.setState((state) => ({
      todos: state.todos.toSpliced(parseInt(e.target.id), 1),
    }))
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);

    if(formData.get('task-entry') === '') return 0;

    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
    }))
  }

  render() {
    return(
      <section>
        <h3></h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input 
            type="text" 
            name="task-entry" 
            id="tEntry" 
            value={this.state.inputVal} 
            onChange={this.handleInputChange} 
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the task</h4>
        <ul>
          {this.state.todos.map((todo, i) => (
            <>
              <Todos todoName={todo} /> 
              <button key={i} onClick={this.deleteTodo} type="button" id={i}>Delete</button>
            </>
          ))}
        </ul>
      </section>
    )
  }
}