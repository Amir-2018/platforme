const Exam = require('../models/Exam')
const Video = require('../models/Video')
const Serie = require('../models/Serie')
module.exports.getAllFiles = (req,res)=>{
    Video.find({}).then(result =>{
        if(result){
            Exam.find({})
            .then(exam =>{
                if(exam){
                    Serie.find({}).then(serie =>{
                        res.status(200).json({
                            videos : result,
                            exams : exam,
                            series : serie
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