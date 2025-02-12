import "../components/To-Do-App.css";
import { useState } from "react";

function TodoList() {
  const [toDoList, setToDoList] = useState([]);

  const [taskName, setTaskName] = useState("");

  const saveTodDo = (event) => {
    event.preventDefault();
    if (
      !toDoList.some((task) => task.name === taskName) &&
      taskName.trim() !== ""
    ) {
      let finalToDoList = [...toDoList, { name: taskName, status: false }];
      setToDoList(finalToDoList);
      setTaskName("");
    } else {
      alert("This task already exists or is empty...");
    }
  };

  let list = toDoList.map((task, index) => (
    <ToDoListItem
      key={index}
      task={task}
      indexNo={index}
      toDoList={toDoList}
      setToDoList={setToDoList}
    />
  ));

  return (
    <div className="App">
      <h1>ToDo-App</h1>
      <form onSubmit={saveTodDo}>
        <input
          type="text"
          name="taskName"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button>Save</button>
      </form>

      <div className="outerDiv">
        <ul>{list}</ul>
      </div>
    </div>
  );
}

export default TodoList;

// Component to render each task item
function ToDoListItem({ task, indexNo, toDoList, setToDoList }) {
  const toggleStatus = () => {
    let updatedList = toDoList.map((t, i) =>
      i === indexNo ? { ...t, status: !t.status } : t
    );
    setToDoList(updatedList);
  };

  const deleteRow = (event) => {
    event.stopPropagation();
    let finalData = toDoList.filter((_, index) => index !== indexNo);
    setToDoList(finalData);
  };

  return (
    <li className={task.status ? "completeToDo" : ""} onClick={toggleStatus}>
      {indexNo + 1} {task.name} <span onClick={deleteRow}>&times;</span>
    </li>
  );
}
