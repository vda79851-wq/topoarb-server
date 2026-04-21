const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => res.json({ status: "ok" }));
app.listen(process.env.PORT || 3001, () => console.log("ok"));
