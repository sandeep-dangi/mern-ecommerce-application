const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim: true,
    },
    slug:{
        type:String,
        required:true,
        unique:true,
        lowercase: true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type: Number,
        required:true,
    },
    category: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        // enum: ["Apple", "Samsung", "Lenovo"],
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    sold: {
        type: Number,
        default: 0,
    },
    images: [
        {
        public_id: String,
        url:String,
        },
    ],
    // color: {
    //     type: String,
    //     // enum: ["Black","Brown","red"],
    //     required: true,
    // },
    
    color: [], //when backend integrate(6v.. 27min)
    tags: [],   //same time
    // color: {
    //     type: String,
    //     required:true,
    // },          when 8th vv 77.5 integration
    ratings: [
        {
        star: Number,
        comment: String,
        postedby: {type: mongoose.Schema.Types.ObjectId,ref: "User" },
        },
    ],

    totalrating: {
        type: String,
        default: 0,
    },

},
{ timestamps: true }
);

//Export the model
module.exports = mongoose.model('Product', productSchema);


