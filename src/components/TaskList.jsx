import { useSelector } from "react-redux";
import Task from "./Task";
import { statusFilters } from "../redux/constants";
import { getStatusFilter, getTasks } from "../redux/selectors";

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter((task) => !task.completed);
    case statusFilters.completed:
      return tasks.filter((task) => task.completed);
    default:
      return tasks;
  }
};

const TaskList = () => {
  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(getStatusFilter);

  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className="task-list">
      {visibleTasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
