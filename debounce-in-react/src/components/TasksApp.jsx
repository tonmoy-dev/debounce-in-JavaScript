import { useEffect, useState } from "react";
import tasks from "../assets/data";

export default function TasksApp() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);

  // created debouncing using useEffect hook
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFilteredTasks(
        tasks.filter((task) =>
          task.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  // handle input change with debouncing
  const handleInputChange = (e) => {
    let query = e.target.value;
    setSearchQuery(query);
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
