// copy BrandRoute.js code
//find and replace Brand to Color
const express = require("express");
const { createColor, updateColor, deleteColor, getColor, getallColor } = require("../controller/colorCtrl");    //1st change
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createColor);
router.put("/:id", authMiddleware, isAdmin, updateColor);
router.delete("/:id", authMiddleware, isAdmin, deleteColor);
router.get("/:id", getColor);
router.get("/", getallColor);


module.exports = router;