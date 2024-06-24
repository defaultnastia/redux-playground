import { useDispatch, useSelector } from "react-redux";
import { Button } from "./Button";
import { statusFilters } from "../redux/constants.js";
import { getStatusFilter, getTasks } from "../redux/selectors.js";
import { setStatusFilter } from "../redux/actions.js";

const Header = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getStatusFilter);
  const tasks = useSelector(getTasks);

  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

  return (
    <div className="header">
      <div className="tasks">
        <h3>Tasks</h3>
        <p>Active: {count.active}</p>
        <p>Completed: {count.completed}</p>
      </div>
      <div className="filter">
        <h3>Filter by Status</h3>
        <div className="filter-buttons">
          <Button
            selected={filter === statusFilters.all}
            onClick={() => handleFilterChange(statusFilters.all)}
          >
            All
          </Button>
          <Button
            selected={filter === statusFilters.active}
            onClick={() => handleFilterChange(statusFilters.active)}
          >
            Active
          </Button>
          <Button
            selected={filter === statusFilters.completed}
            onClick={() => handleFilterChange(statusFilters.completed)}
          >
            Completed
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
