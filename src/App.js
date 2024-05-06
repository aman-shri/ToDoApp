import "./styles.css";
import Header from "./Header/Header.js";
import Count from "./Count/Count.js";
import ToDoList from "./ToDoList/ToDoList.js"

export default function App() {
  return (
    <div className="App">
      <Header />
      <ToDoList />
    </div>
  );
}
