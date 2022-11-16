import './App.css';
import {useState, useEffect} from "react";

import List from "./Components/List";
import NewItem from "./Components/NewItem";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(data => setTodos(data.splice(0,20)));
  }, [])

  return (
    <div className="App">
      <NewItem setTodos={setTodos}/>
      <List setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
