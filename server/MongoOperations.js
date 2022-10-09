const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// установка схемы
const gameScheme = new Schema({
  FirstPlayer: String,
  SecondPlayer: String,
  Winner: String,
});

// подключение
mongoose.connect(
  "mongodb+srv://product:qwerty123@cluster0.xotx6dl.mongodb.net/product_db"
);

const GameResults = mongoose.model("game_results", gameScheme);

async function SaveGameResult(first, second, winner) {
  const res = new GameResults({
    FirstPlayer: first,
    SecondPlayer: second,
    Winner: winner,
  });
  await res.save();
}

module.exports = {
  SaveGameResult,
};
