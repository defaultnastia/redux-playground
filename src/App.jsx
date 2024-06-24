import Header from "./components/Header";
import { TaskForm } from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => (
  <>
    <Header></Header>
    <TaskForm />
    <TaskList />
  </>
);

export default App;
