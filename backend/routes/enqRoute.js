// copy code from brandRoute.js
//find and replace Brand to Enquiry
const express = require("express");
const { createEnquiry, updateEnquiry, deleteEnquiry, getEnquiry, getallEnquiry } = require("../controller/enqCtrl");    //1st change  it is enqCtrl
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", createEnquiry);
router.put("/:id", authMiddleware, isAdmin, updateEnquiry);
router.delete("/:id", authMiddleware, isAdmin, deleteEnquiry);
router.get("/:id", getEnquiry);
router.get("/", getallEnquiry);


module.exports = router;