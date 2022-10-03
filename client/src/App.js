import "./App.css";

function App() {
  var isEnd = false;
  var symb = "X";
  var array = [];
  array.length = 9;
  function Click(e) {
    if (!isEnd) {
      e.preventDefault();
      if (e.target.innerHTML === "") {
        symb = symb === "X" ? "0" : "X";
        e.target.innerHTML = symb;
        array[e.target.id] = e.target.innerHTML;
        fetch("/api", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            blocks: array,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.answer != "") {
              isEnd = true;
              var winner = document.getElementById("winner");
              winner.innerHTML = data.answer;
              winner.style = "display: block;";
            }
          });
      }
    }
  }
  return (
    <div className="App">
      <h2>Tic-Tac-Toe</h2>
      <h2 id="winner"></h2>
      <div className="grid">
        <div className="block" id="0" onClick={(e) => Click(e)}></div>
        <div className="block" id="1" onClick={(e) => Click(e)}></div>
        <div className="block" id="2" onClick={(e) => Click(e)}></div>
        <div className="block" id="3" onClick={(e) => Click(e)}></div>
        <div className="block" id="4" onClick={(e) => Click(e)}></div>
        <div className="block" id="5" onClick={(e) => Click(e)}></div>
        <div className="block" id="6" onClick={(e) => Click(e)}></div>
        <div className="block" id="7" onClick={(e) => Click(e)}></div>
        <div className="block" id="8" onClick={(e) => Click(e)}></div>
      </div>
    </div>
  );
}

export default App;
