import React, { useState } from "react";

function App() {
  const [item, setItem] = useState();
  const [prevItems, setPrevItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setItem(newValue);
  }

  function handleClick() {
    prevItems.push(item);
    setPrevItems((prevArr) => {
      return [...prevArr];
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <script></script>
        <ul>
          {prevItems.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
