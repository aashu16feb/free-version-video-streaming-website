const mongoose = require("mongoose");

const playListSchema = new mongoose.Schema({
  playListName: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
  },
  videos: {
    type: [String],
    // required: true,
  },
});

const PlayList = mongoose.model("PlayList", playListSchema);

module.exports = PlayList;
