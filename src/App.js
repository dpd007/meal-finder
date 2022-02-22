import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item">Action</a>
          <a className="dropdown-item">Another action</a>
          <a className="dropdown-item">Something else here</a>
        </div>
      </div>
    </div>
  );
}

export default App;
