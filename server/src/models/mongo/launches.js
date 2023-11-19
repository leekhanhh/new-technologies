const mongoose = require("mongoose");
const launchSchema = new mongoose.Schema({
    flightNumber:{
        type:Number,
        require:true,
    },
    launchDate:{
        type:Date,
        require:true,
    },
    mission: {
        type: String,
        required: true,
      },
      rocket: {
        type: String,
        required: true,
      },
      target: {
        type: String,
      },
      customers: [String],
      upcoming: {
        type: Boolean,
        required: true,
      },
      success: {
        type: Boolean,
        required: true,
        default: true,
      },
});

module.exports = mongoose.model("Launch",launchSchema);