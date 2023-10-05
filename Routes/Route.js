const routers = require("../Controller/CurdController");
const express = require("express");
const router = express.Router();
const { Read, Create, FetchData, EditData, Delete } = routers;

router
  .get("/", Read)
  .get("/profile/:id", FetchData)
  .post("/register", Create)
  .patch("/edit/:id", EditData)
  .delete("/delete/:id", Delete);

module.exports = router;
