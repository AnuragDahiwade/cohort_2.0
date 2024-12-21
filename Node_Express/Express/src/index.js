const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = process.env.PORT || 3000;

// localhot:3000
app.get("/", (req, res) => {
  res.status(201).send({ msg: "Home Page" });
});

// localhot:3000/users
app.get("/api/users", (req, res) => {
  // const html = `
  // <ul>
  // ${users.map((user) => `<li>${user.first_name} : ${user.email}</li>`).join("")}
  // </ul>
  // `;
  // res.send(html);

  console.log(req.query);
  const {
    query: { filter, value },
  } = req;

  // When filter and value are undefined
  // if (!filter && !value) return res.send(users);

  if (filter && value)
    return res.send(users.filter((u) => u[filter].includes(value)));

  return res.send(users);
});

// Route Parameter
// localhot:3000/users/12
// localhot:3000/users/77
app.get("/api/users/:id", (req, res) => {
  const parsedId = Number(req.params.id);
  if (isNaN(parsedId)) {
    return res.status(400).send({ msg: "Bad Request. Invalid Id" });
  }
  const user = users.find((u) => u.id === parsedId);
  if (!user) {
    return res.sendStatus(404);
  }
  return res.json(user);
});

// Query Parameters
// localhot:3000/products?key=value&key2=value2

app.listen(PORT, () => console.log(`Server running on: ${PORT}`));
