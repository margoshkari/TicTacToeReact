import "./App.css";

function App() {
  var isPlay = false;
  var symb = "X";
  var array = [];
  array.length = 9;
  var firstPlayer = "";
  var secondPlayer = "";
  function Click(e) {
    if (isPlay) {
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
            first: firstPlayer,
            second: secondPlayer,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.answer != "") {
              isPlay = false;
              var winner = document.getElementById("winner");
              winner.innerHTML = data.answer;
              winner.style = "display: block;";
            }
          });
      }
    }
  }
  function Play() {
    firstPlayer = document.getElementById("first").value;
    secondPlayer = document.getElementById("second").value;
    var blocks = document.getElementsByClassName("block");
    var winner = document.getElementById("winner");
    if (firstPlayer != "" && secondPlayer != "") {
      isPlay = true;
      symb = "X";
      array = [];
      array.length = 9;
      winner.style = "display: none;";
      for (let index = 0; index < blocks.length; index++) {
        blocks[index].innerHTML = "";
      }
    } else {
      alert("Fill all fields!");
    }
  }
  return (
    <div className="Page">
      <div className="data">
        <input type="text" placeholder="First player" id="first"></input>
        <br></br>
        <br></br>
        <input type="text" placeholder="Second player" id="second"></input>
        <br></br>
        <br></br>
        <button onClick={Play}>Play</button>
      </div>
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
    </div>
  );
}

export default App;
