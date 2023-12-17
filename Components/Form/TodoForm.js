import React, { useState } from "react";

const TodoForm = (props) => {
    const [todo, setTodo] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        const todoData = {
            todo,
            completed:false
        }

        props.onAddTodo(todoData);
    }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Your todo</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputTodo"
          placeholder="Enter Todo"
          onChange={(e) => setTodo(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
