const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(
  express.json({
    type: ["application/json", "text/plain"],
  })
);
app.post(`/api`, async (req, res) => {
  res.json({ answer: Check(req.body.blocks) });
});
function Check(field) {
  for (let index = 0; index < field.length; index += 3) {
    if (field[index] != null) {
      if (
        field[index] == field[index + 1] &&
        field[index] == field[index + 2]
      ) {
        return Winner(field[index]);
      }
    }
  }

  for (let index = 0; index < 3; index++) {
    if (field[index] != null) {
      if (
        field[index] == field[index + 3] &&
        field[index] == field[index + 6]
      ) {
        return Winner(field[index]);
      }
    }
  }
  if (field[0] != null) {
    if (field[0] == field[4] && field[0] == field[8]) {
      return Winner(field[0]);
    }
  }
  if (field[2] != null) {
    if (field[2] == field[4] && field[2] == field[6]) {
      return Winner(field[2]);
    }
  }
  if (field.every((item) => item != null)) return Winner("");

  return false;
}

function Winner(symb) {
  if (symb == "X") {
    return "Winner Cross!";
  } else if (symb == "0") {
    return "Winner Zero!";
  } else {
    return "Dead Heat!";
  }
}

app.listen(port, () => {
  console.log(`Start server ${port}`);
});
