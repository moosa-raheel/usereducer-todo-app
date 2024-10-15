import React from "react";
import Todo from "./Todo";

const Todos = ({ todos, dispatch }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} dispatch={dispatch} />
      ))}
      {todos.length === 0 ? (
        <div className="no">
          <h1>No Todo Found</h1>
        </div>
      ) : null}
    </div>
  );
};

export default Todos;
