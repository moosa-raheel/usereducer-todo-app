import React, { useReducer } from "react";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

const App = () => {
  const initialTodos = [];
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case "DELETE":
        return state.filter((el) => el.id !== payload.id);
      case "ADD":
        return [...state, payload.todo];
      case "TOGGLE":
        return state.map((el) => {
          if (el.id == payload.id) {
            return { ...el, completed: !el.completed };
          } else {
            return el;
          }
        });
      default:
        alert("Invalid Action");
    }
    return state;
  };
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  return (
    <div>
      <TodoForm dispatch={dispatch} />
      <Todos dispatch={dispatch} todos={todos} />
    </div>
  );
};

export default App;
