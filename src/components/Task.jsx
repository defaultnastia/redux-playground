const Task = ({ task }) => {
  return (
    <div className="task-item">
      <input type="checkbox" checked={false} />
      <p>Dummy {task}</p>
      <button> X</button>
    </div>
  );
};

export default Task;

// const Task = ({ task }) => {
//   return (
//     <div className="task">
//       <input type="checkbox" checked={task.completed} />
//       <p>{task.text}</p>
//       <button> X</button>
//     </div>
//   );
// };

// export default Task;
