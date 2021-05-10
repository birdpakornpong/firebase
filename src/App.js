import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import ProductGroup from "./components/ProductGroup";

function App() {
  return (
    <div className="App">
      <h1>TodoList</h1>
      <Form />
      <TodoList />
      <ProductGroup />
    </div>
  );
}

export default App;
