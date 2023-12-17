import React from "react";

const CompletedTodos = (props) => {
  return (
    <div>
        {props.todos && props.todos.map((item) => {
            return(
<ul class="list-group" key={item._id}>
        <li className="list-group-item">{item.todo}</li>
      </ul>
            )
        })}
      
    </div>
  );
};

export default CompletedTodos;
