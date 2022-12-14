import React, { useState } from "react";
import Title from "../components/Title";
import TodoInput from "../components/TodoInput";

const Home = () => {
  const [todos, setTodos] = useState([]);

  const onSubmit = (value) => setTodos([value, ...todos]);

  return (
    <div>
      <Title />,
      <TodoInput onSubmit={onSubmit} />
      <div>
        {todos.map((value) => (
          <ul>
            <li>{value}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Home;
