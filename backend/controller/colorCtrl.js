//copy ColorCtrl whole code
// find and Replace   Color to Color
const Color = require("../models/colorModel");     //1st line change 
const asyncHandler = require("express-async-handler");
const validateMongodbId = require("../utils/validateMongodbid.js");

const createColor = asyncHandler(async (req,res) => {
    try {
        const  newColor = await Color.create(req.body);
        res.json(newColor);
    }
    catch (error) {
        throw new Error(error);
    }
});

const updateColor = asyncHandler(async (req,res) => {
    const { id } = req.params; 
    validateMongodbId(id);
    try {
        const  updatedColor = await Color.findByIdAndUpdate(id,req.body, {
            new: true,
        })
        res.json(updatedColor);
    }
    catch (error) {
        throw new Error(error);
    }
});

const deleteColor = asyncHandler(async (req,res) => {
    const { id } = req.params;
    validateMongodbId(id); 
    try {
        const  deletedColor = await Color.findByIdAndDelete(id);
        res.json(deletedColor);
    }
    catch (error) {
        throw new Error(error);
    }
});

//copy createColor
const getColor = asyncHandler(async (req,res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const  getaColor = await Color.findById(id);
        res.json(getaColor);
    }
    catch (error) {
        throw new Error(error);
    }
});

const getallColor = asyncHandler(async (req,res) => {
    try {
        const  getallColor = await Color.find();
        res.json(getallColor);
    }
    catch (error) {
        throw new Error(error);
    }
});


module.exports = { createColor , updateColor, deleteColor, getColor, getallColor };



// validateMongodbId in this route
//     updateColor
//     deleteColor
