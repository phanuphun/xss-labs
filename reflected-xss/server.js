const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");

app.use(cors());
// app.use(
//   helmet.contentSecurityPolicy({
//     directives: {
//       defaultSrc: ["'self'"],
//       scriptSrc: ["'self'"],
//       objectSrc: ["'none'"],
//       imgSrc: ["'self'", "data:"],
//       connectSrc: ["'self'"],
//     },
//   })
// );

// app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/search", (req, res) => {
  const q = req.query.q || "";
  res.json({ query: q, results: [] });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
