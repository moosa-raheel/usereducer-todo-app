import { useEffect, useRef, useState } from "react";

const TodoForm = ({ dispatch }) => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const [todo, setTodo] = useState("");
  const handleSubmit = (e) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title: todo,
      complete: false,
    };
    dispatch({ type: "ADD", payload: { todo: newTodo } });
    e.preventDefault();
    setTodo("");
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Enter Title"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        ref={inputRef}
      />
      <button type="submit">Add +</button>
    </form>
  );
};

export default TodoForm;
