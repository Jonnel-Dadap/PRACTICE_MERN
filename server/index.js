const express = require("express");
const todos = require("./data");
const app = express();
const PORT = 5000;

app.use(express.json()) //, convert incoming JSON data. also called as a middleware
app.use(express.urlencoded({ extended: true })); // Para naman sa mga HTML form submissions


app.get("/", (req, res) => {
  res.send("Hello from Express!");
});
app.get("/todos", (req, res) => {
  console.log("==== THE OUT PUT OF GET =====");
  console.log("GET todos called");
  res.json(todos);
  console.log(req.query); // pag params yung ipapasa kasaral sa url.
  console.log("The length of JSON :", todos.length)
});
app.post("/", (req, res) => {
console.log(req.body);
})


app.post("/todos", (req, res) => {
  const { Title } = req.body; // destructuring style.
  const newTodo = [
    {
      id: todos[todos.length - 1].id,          // TEst for add new user.
      title: Title,
      completed: false
    }];
  console.log("POST route running");
  console.log("The length of JSON :", todos[todos.length - 1].id)
  console.log(newTodo);
  res.send("Todo received");
});
app.listen(PORT, () => {
  console.log("Server running on port 5000");
});

