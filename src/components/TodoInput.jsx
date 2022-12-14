import React, { useState } from "react";

//custom hook
const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: (e) => setValue(e.target.value),
    resetValue: () => setValue(""),
  };
};

const TodoInput = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => setValue(e.target.value);
  const resetValue = () => setValue("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    resetValue();
  };

  return (
    <>
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        Today, i want to ...
      </h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <input
          onChange={onChange}
          type="text"
          value={value}
          style={{ fontSize: "1.5em" }}
        />
        <button style={{ backgroundColor: "blue", color: "#ffffff" }}>
          Add todo
        </button>
      </form>
    </>
  );
};

export default TodoInput;
