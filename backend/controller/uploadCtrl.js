// productCtrl se uploadImages and deleteImages ko edr rkh diya

const asyncHandler = require("express-async-handler");
const {cloudinaryUploadImg,cloudinaryDeleteImg} = require("../utils/cloudinary");
const fs = require("fs");

const uploadImages = asyncHandler(async (req,res) => {
    // console.log(req.files);
    // const { id } = req.params;   // this is for product.....by this we find our product and upload our images
    // validateMongodbId(id);
    try
    {
        const uploader = (path) => cloudinaryUploadImg(path,"images");
        const urls = [];
        const files = req.files;
        for (const file of files) {
         const { path } = file;
         const newpath = await uploader(path);
         console.log(newpath);
         urls.push(newpath);
         fs.unlink(path, (err) => {
             if (err) {
                 console.error(`Error deleting file ${path}:`, err);
             } else {
                 console.log(`File ${path} deleted successfully`);
             }
         });
         
         }
        const images =  urls.map((file) => {
            return file;
         })
        res.json(images);    //here we donot need the update the images , we only need the url , asset id , public id 

        // const findProduct = await Product.findByIdAndUpdate(
        //     id,
        //      {
        //      images: urls.map((file) => {
        //         return file;
        //      }),
        //    },
        //     {
        //         new: true,
        //     }
        //             //image:  it is in our model
        // );
        // res.json(findProduct);
    }
    catch (error) {
        throw new Error(error);
    }
 });

 const deleteImages = asyncHandler(async (req,res) => {
    const { id } = req.params;
    try
    {
        const deleted =  cloudinaryDeleteImg(id,"images");
        res.json({ message:"Deleted" });
    }
    catch (error) {
        throw new Error(error);
    }
 });

module.exports = { uploadImages, deleteImages, };