import React from "react";

const TodoList = (props) => {
  return (
    <>
      {props.todos &&
        props.todos.map((item) => {
          return (
            <ul class="list-group">
              <li class="list-group-item">{item.todo}</li>
              <button type="button" class="btn btn-danger">
                Delete
              </button>
            </ul>
          );
        })}
    </>
  );
};

export default TodoList;
