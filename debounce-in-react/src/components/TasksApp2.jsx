import { useState } from "react";
import tasks from "../assets/data";

export default function TasksApp2() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);

  let timeoutId = null; // taking timeout id from setTimeout fn

  // debounce fn
  const debouncedSearch = (query) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setFilteredTasks(
        tasks.filter((task) =>
          task.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    }, 1000);
  };

  // handle input change with debouncing
  const handleInputChange = (e) => {
    let query = e.target.value;
    setSearchQuery(query);
    debouncedSearch(query);
  };
  return (
    <>
      <h1>Debounce in React!</h1>
      <p>Trying to fetch some dummy data from network request.</p>
      <input
        type="text"
        name="textInput"
        id="search"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <div>
        {filteredTasks.map((task) => (
          <p key={task.id}>{task.title}</p>
        ))}
      </div>
    </>
  );
}
