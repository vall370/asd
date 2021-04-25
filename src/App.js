import React from "react";
import "./styles.css";
import data from "../data.json";

export default function App() {
  const [value, setValue] = React.useState(5);
  return (
    <div className="App">
      <input
        type="range"
        value={value}
        onChange={({ target }) => setValue(target.value)}
        min="5"
        max="10000"
        step="100"
      />
      <div>
        {data
          .filter((data) => data.amount.min < value)
          .map((data) => (
            <li>{data.amount.min}</li>
          ))}
      </div>
    </div>
  );
}
