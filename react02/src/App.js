import './assets/css/style.css';
import './App.css';
import React, { useState } from 'react';
import Button from './components/Button';

function App() {
  const [count, setCount] = useState(0);

  let increment = () => {
    setCount(count + 1);
  }

  let decrement = () => {
    setCount(count - 1);
  }

  const tags = ["tag1", "tag2", "tag3"]

  return (
    <div className="App">
      <div>
        <div className="count badge">
          <h3>Count:</h3>
          <h1>{count}</h1>
        </div>
        <div className="buttons">
          <Button title="-" action={decrement} />
          <Button className="m2" title="+" action={increment} />
        </div>
      </div>
      <div>
        <ul>
          {tags.map((item, index) =>
            <li>{index}-{item}</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
