import "./App.css";

function App() {
  var turn = "X";
  function Click(e) {
    e.preventDefault();
    if (e.target.innerHTML == "") {
      turn = turn == "X" ? "0" : "X";
      e.target.innerHTML = turn;
    }
  }
  return (
    <div className="App">
      <h2>Tic-Tac-Toe</h2>
      <div className="grid">
        <div className="block" onClick={(e) => Click(e)}></div>
        <div className="block" onClick={(e) => Click(e)}></div>
        <div className="block" onClick={(e) => Click(e)}></div>
        <div className="block" onClick={(e) => Click(e)}></div>
        <div className="block" onClick={(e) => Click(e)}></div>
        <div className="block" onClick={(e) => Click(e)}></div>
        <div className="block" onClick={(e) => Click(e)}></div>
        <div className="block" onClick={(e) => Click(e)}></div>
        <div className="block" onClick={(e) => Click(e)}></div>
      </div>
    </div>
  );
}

export default App;
