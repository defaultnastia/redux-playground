const Header = () => {
  return (
    <div className="header">
      <div className="tasks">
        <h3>Tasks</h3>
        <p>Active:</p>
        <p>Completed:</p>
      </div>
      <div className="filter">
        <h3>Filter by Status</h3>
        <div className="filter-buttons">
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
