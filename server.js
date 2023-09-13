require("dotenv").config();
const express = require("express");
const app = express();

const todos = [
  { id: 1, name: "Rita" },
  { id: 2, name: "Non" },
  { id: 3, name: "Palm" },
  { id: 4, name: "Bee" },
];

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to our server" });
});

app.get("/todos", (req, res) => {
  res.json(todos);
});

// app.get("/todos/:index", (req, res) => {
//   res.send(todos[+req.params.index]);
// });

app.get("/todos/:id", (req, res) => {
  let { id } = req.params;
  let output = todos.filter((el) => el.id === +id);
  if (output.length <= 0) {
    return res.status(404).json({ msg: `has no id data : ${id}`, id });
  }
  res.json(output);
  // res.send("id: " + [req.params.id]);
});

app.use((req, res) => {
  res.status(404).send({ msg: "resource not found" });
});

let port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("server on port : ", port);
});
