const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  title: {
    type: String,
    required : true 
  },
  
  file : {
    data : Buffer,
    contentType : String
  },
  id_teacher : {
    type : String
  }
});

const Exam = mongoose.model('exam', userSchema);

module.exports = Exam;