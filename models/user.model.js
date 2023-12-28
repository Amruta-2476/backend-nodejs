const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        firstName: {type : String},
        lastName: {type : String},
        dept: {type : String},
        age: {type : Number}
    },
    {timestamps:true}  // Adds createdAt and updatedAt fields to the schema automatically ..like when you created user
);

module.exports = mongoose.model('User',userSchema)