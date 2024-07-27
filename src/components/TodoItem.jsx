import { MdDelete } from "react-icons/md";
import styles from "./TodoItem.module.css";
function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className={`container ${styles.abc}`}>
      <div className={`row ${styles.kgrow}`}>
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className={`btn btn-danger ${styles.kgbutton}`}
            onClick={() => onDeleteClick(todoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
    
  );
}

export default TodoItem;