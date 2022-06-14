const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/moviesApp");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/moviesApp");
  console.log("Successful!!!!");
}

// Defining a Schema (in Mongoose)
const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});

// Compiling that schema into a Model
// a Model = a Class with construct documents
const Movie = mongoose.model("Movie", movieSchema);

// Create a new Model
const amadeus = new Movie({
  title: "Amadeus",
  year: 1986,
  score: 9.2,
  rating: "R",
});
