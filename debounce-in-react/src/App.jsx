import "./App.css";
import TasksApp from "./components/TasksApp";
import TasksApp2 from "./components/TasksApp2";

function App() {
  return (
    <>
      {/* Debouncing using useState and useEffect hook */}
      <TasksApp />
      {/* Debouncing using useState hook -- manual debounce */}
      <TasksApp2 />
    </>
  );
}

export default App;
