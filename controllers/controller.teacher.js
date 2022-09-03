const multer = require('multer') ; 
const Exam = require('../models/Exam')
const Video = require('../models/Video')
const Serie = require('../models/Serie')
const Teacher = require('../models/Teacher')
const jwt = require('jsonwebtoken');

const Storage = multer.diskStorage({
    destination: '../app/uploads/',
    filename: function (req, file, cb) {
    //originalename Name of the file on the user’s computer
      cb(null, file.originalname );
    }
  })
  
  const upload = multer({
    storage : Storage
  }).single('image')
  
module.exports.uploadExam =  (req, res) => {  
    const token = req.cookies.jwt;
    if (token) {
      jwt.verify(token, 'net ninja secret', async (err, decodedToken) => {
        if (err) {
          res.locals.teacher = null;
          next();
        } else {
          let teacher = await Teacher.findById(decodedToken.id);
          upload(req,res,(err)=>{
            if(err){
                console.log(err) 
            }else{
                const exam = new Exam({
                    title : req.body.title ,
                    file : {
                      data : req.file.filename,
                      contentType : 'image/png'
                    },
                    id_teacher : teacher._id
                  })
                exam.save().then(result =>{
                    if(result){
                        res.status(200).json({
                            message : 'Exam uploaded with success'
                        })
                    }else{
                        res.status(500).json({
                            message : 'Exam does not saved'
                        })
                    }
                }).catch(err =>{
                    throw err
                })
            }
        })
        }
      })
    }else{
        res.status(500).json({
            message : 'You are not logged in'
        })
    }

}


module.exports.uploadSerie=  (req, res) => {  
    const token = req.cookies.jwt;
    if (token) {
      jwt.verify(token, 'net ninja secret', async (err, decodedToken) => {
        if (err) {
          res.locals.teacher = null;
          next();
        } else {
          let teacher = await Teacher.findById(decodedToken.id);
          upload(req,res,(err)=>{
            if(err){
                console.log(err) 
            }else{
                const serie = new Serie({
                    title : req.body.title ,
                    file : {
                      data : req.file.filename,
                      contentType : 'image/png'
                    },
                    id_teacher : teacher._id
                  })
                serie.save().then(result =>{
                    if(result){
                        res.status(200).json({
                            message : 'Serie uploaded with success'
                        })
                    }else{
                        res.status(500).json({
                            message : 'Serie does not saved'
                        })
                    }
                }).catch(err =>{
                    throw err
                })
            }
        })
        }
        
    })
}


}

module.exports.uploadVideo=  (req, res) => {  
    const token = req.cookies.jwt;
    if (token) {
      jwt.verify(token, 'net ninja secret', async (err, decodedToken) => {
        if (err) {
          res.locals.teacher = null;
          next();
        } else {
          let teacher = await Teacher.findById(decodedToken.id);
          upload(req,res,(err)=>{
            if(err){
                console.log(err) 
            }else{
                const video = new Video({
                    title : req.body.title ,
                    file : {
                      data : req.file.filename,
                      contentType : 'image/png'
                    },
                    id_teacher : teacher._id
                  })
                video.save().then(result =>{
                    if(result){
                        res.status(200).json({
                            message : 'Video uploaded with success'
                        })
                    }else{
                        res.status(500).json({
                            message : 'Video does not saved'
                        })
                    }
                }).catch(err =>{
                    throw err
                })
            }
        })
        }
    })
}
 
}
module.exports.getOwnStatistique=  (req, res) => {
    const token = req.cookies.jwt;
    if (token) {
      jwt.verify(token, 'net ninja secret', async (err, decodedToken) => {
        if (err) {
          res.locals.teacher = null;
          next();
        } else {
          let teacher = await Teacher.findById(decodedToken.id);
          Video.find({id_teacher : teacher._id}).then(result =>{
            if(result){
                Exam.find({id_teacher : teacher._id})
                .then(exam =>{
                    if(exam){
                        Serie.find({id_teacher : teacher._id}).then(serie =>{
                            res.status(200).json({
                                videos : result.length,
                                exams : exam.length,
                                series : serie.length
                            })
                        }).catch(err =>{
                            console.log(err)
                        })
                    }
                }).catch(err =>{
                    console.log(err)
                })
            }
    
        }).catch(err =>{
            console.log(err)
        })
        }
    })
}else{
    res.status(500).json({
        message : 'You are not authenticated '
    })
}
}


module.exports.getVideos=  (req, res) => {
    const token = req.cookies.jwt;
    if (token) {
      jwt.verify(token, 'net ninja secret', async (err, decodedToken) => {
        if (err) {
          res.locals.teacher = null;
          next();
        } else {
          let teacher = await Teacher.findById(decodedToken.id);
          Video.find({id_teacher : teacher._id})
          .then(result =>{
                res.status(200).json({
                    message  : result
                })
          })
        }
    })
}else{
    res.status(500).json({
        message : 'You are not authenticated '
    })
}
}

module.exports.getExams=  (req, res) => {
    const token = req.cookies.jwt;
    if (token) {
      jwt.verify(token, 'net ninja secret', async (err, decodedToken) => {
        if (err) {
          res.locals.teacher = null;
          next();
        } else {
          let teacher = await Teacher.findById(decodedToken.id);
          Exam.find({id_teacher : teacher._id})
          .then(result =>{
                res.status(200).json({
                    message  : result
                })
          })
        }
    })
}else{
    res.status(500).json({
        message : 'You are not authenticated '
    })
}
}

module.exports.getSeries=  (req, res) => {
    const token = req.cookies.jwt;
    if (token) {
      jwt.verify(token, 'net ninja secret', async (err, decodedToken) => {
        if (err) {
          res.locals.teacher = null;
          next();
        } else {
          let teacher = await Teacher.findById(decodedToken.id);
          Serie.find({id_teacher : teacher._id})
          .then(result =>{
                res.status(200).json({
                    message  : result
                })
          })
        }
    })
}else{
    res.status(500).json({
        message : 'You are not authenticated '
    })
}
}