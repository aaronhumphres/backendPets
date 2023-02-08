// import dependencies
const mongoose = require('mongoose')

// toy is a subdocument. NOT A MODEL
// toy will be oart of the toys array added to specific pets
// since we only need the schema, we can skip detsructuring from mongoose

const toySchema = new mongoose.Schema({

}, { timestamps: true })



module.exports = toySchema