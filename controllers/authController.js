const jwt = require('jsonwebtoken');
const multer = require('multer');
const Teacher = require("../models/Teacher");


// handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: '', password: '' };

  // incorrect email
  if (err.message === 'incorrect email') {
    errors.email = 'That email is not registered';
  }

  // incorrect password
  if (err.message === 'incorrect password') {
    errors.password = 'That password is incorrect';
  }

  // duplicate email error
  if (err.code === 11000) {
    errors.email = 'that email is already registered';
    return errors;
  }

  // validation errors
  if (err.message.includes('user validation failed')) {
    // console.log(err);
    Object.values(err.errors).forEach(({ properties }) => {
      // console.log(val);
      // console.log(properties);
      errors[properties.path] = properties.message;
    });
  }

  return errors;
}

// create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, 'net ninja secret', {
    expiresIn: maxAge
  });
};


const Storage = multer.diskStorage({
  destination: '../app/uploads/',
  filename: function (req, file, cb) {
  //originalename Name of the file on the user’s computer
    cb(null, file.originalname );
  }
})

const upload = multer({
  storage : Storage,
  limits: {
    fileSize: 5000000,
  },
}).single('image')


module.exports.signup_post =  (req, res) => {
  
  upload(req,res,(err)=>{
    if(err){
        if(err.code == 'LIMIT_FILE_SIZE'){
          res.json({
              message : "Image size is over than 5MB"
          })         
        }  
    }else{
      console.log(req.body)
      if(req.file == undefined){
        res.json({
          message : "Image Required"
      }) 
      }else{
      const str = req.file.originalname;
      const slug = str.split('.').pop();
      // check if the file is of type image
      
        if(slug =='jpg' || slug =='png' || slug =='jpeg' || slug =='gif'|| slug =='bmp' ){
          const teacher = new Teacher({
            name : req.body.name ,
            lastname : req.body.lastname,
            phone : req.body.phone,
            email : req.body.email,
            speciality : req.body.speciality,
            password : req.body.password,
            image : {
              data : req.file.filename,
              contentType : 'image/png'
            }  
          })
            teacher.save()
            .then(result=>{
              const token = createToken(teacher._id);
              res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
              res.status(201).json({ message: 'Account created with success' });
            }).catch(err =>{
              if(err.code == 11000){
                res.status(400).json({
                  message : "Email is already exist"
              })  
              }
            })
      }else{
        res.json({
          message : "Only images are recommended "
        }) 
      }
   
      
      }
      
    }
  })
}

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Teacher.login(email, password);
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id,message:'Login with success' });
  } 
  catch (err) {
    const errors = handleErrors(err);
    res.json({ message :'Failed to login' });
  }

}

module.exports.logout_get = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.status(200).json({
    message : 'You are logged out '
  })
}
module.exports.getVIP = (req, res) => {
  res.status(200).json({
    message : 'You logged in into a vip service  '
  })
}
