import Task from "./Task";

const TaskList = () => {
  const dummyArr = ["cat", "fish", "squirrel", "moth"];
  return (
    <ul className="task-list">
      {dummyArr.map((task) => (
        <li key={task}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
