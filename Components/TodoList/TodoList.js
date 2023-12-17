import React, { useState } from "react";

const TodoList = (props) => {
  const [completed, setCompleted] = useState(false);

  const deleteTodoHandler = (id) => {
    props.onDeleteTodo(id)
  }

  return (
    <>
      {props.todos &&
        props.todos.map((item) => {
          return (
            <ul className="d-flex justify-content-around">
              <input
                type="checkbox"
                className="form-check-input border-dark"
                id="exampleCheck1"
                onChange={(e) => setCompleted(e.target.checked)}
              />
              <li className="list-group-item">{item.todo}</li>
              <button type="button" className="btn btn-danger" onClick={() => deleteTodoHandler(item._id)}>
                Delete
              </button>
            </ul>
          );
        })}
    </>
  );
};

export default TodoList;
