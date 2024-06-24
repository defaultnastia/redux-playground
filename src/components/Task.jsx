import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "../redux/actions";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));
  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <div className="task-item">
      <input type="checkbox" onChange={handleToggle} checked={task.completed} />
      <p>Dummy {task.text}</p>
      <button onClick={handleDelete}> X</button>
    </div>
  );
};

export default Task;
