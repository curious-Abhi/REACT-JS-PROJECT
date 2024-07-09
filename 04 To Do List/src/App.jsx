import react, { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAddtask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...tasks, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <div className="app">
        <h1>To-Do-List</h1>
        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Add a New Task"
          ></input>
          <button onClick={handleAddtask}>Add task</button>
        </div>

        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className={task.completed ? "completed" : ""}>
              <span
                onClick={() => {
                  handleToggleComplete(task.id);
                }}
              >
                {task.text}
              </span>
              <button onClick={()=>{handleDeleteTask(task.id)}}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
