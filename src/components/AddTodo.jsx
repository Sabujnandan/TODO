import { useState } from "react";
import styles from "./AddTodo.module.css";
function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container text-center" id={styles.xyz}>
      <div className="row kg-row">
        <div className="col-6">
          <input
          className={styles.todoinput}
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input className={styles.tododateinput } type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
          
            type="button"
            className={`btn btn-success kg-button ${styles.todosubmit }`}
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;