const express = require('express');
const { uploadImages, deleteImages } = require('../controller/uploadCtrl');
const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware');
const { uploadPhoto, productImgResize } = require('../middlewares/uploadImages');


const router = express.Router();

// /upload/:id   ye put route tha ab post bna diya 8 integration 53.53  phle router.put("/upload" ye tha
router.post("/", authMiddleware, isAdmin,uploadPhoto.array("images", 10), productImgResize, uploadImages);


router.delete("/delete-img/:id", authMiddleware, isAdmin, deleteImages);



module.exports = router;