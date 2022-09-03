const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  
  file : {
    data : Buffer,
    contentType : String
  },
  id_teacher : {
    type : String
  }
});

const Video = mongoose.model('video', userSchema);

module.exports = Video;