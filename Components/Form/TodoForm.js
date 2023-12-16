import React, { useState } from "react";

const TodoForm = (props) => {
    const [todo, setTodo] = useState('');
    const [completed, setCompleted] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();

        const todoData = {
            todo,
            completed
        }

        props.onAddTodo(todoData);
    }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label for="exampleInputEmail1">Your todo</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputTodo"
          placeholder="Enter Todo"
          onChange={(e) => setTodo(e.target.value)}
        />
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={(e) => setCompleted(e.target.checked)}/>
        <label className="form-check-label" for="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
