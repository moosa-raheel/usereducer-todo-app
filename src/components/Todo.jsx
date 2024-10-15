import React from "react";

const Todo = ({ title, id, completed, dispatch }) => {
  const handleDelete = (id) => {
    dispatch({ type: "DELETE", payload: { id: id } });
  };
  return (
    <div className="todo">
      <div>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => {
            dispatch({ type: "TOGGLE", payload: { id: id } });
          }}
        />
        <h2
          style={{
            textDecoration: completed ? "line-through" : "solid",
          }}
        >
          {title}
        </h2>
      </div>
      <button className="del" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Todo;
