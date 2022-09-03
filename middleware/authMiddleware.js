const jwt = require('jsonwebtoken');
const Teacher = require('../models/Teacher')

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, 'net ninja secret', (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.status(500).json({
          message : 'Token is modified '
        })
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.status(500).json({
      message : 'you are not logged in '
    })
  }
};

// check current user
const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, 'net ninja secret', async (err, decodedToken) => {
      if (err) {
        res.locals.teacher = null;
        next();
      } else {
        let teacher = await Teacher.findById(decodedToken.id);
        res.locals.teacher = teacher;
        next();
      }
    });
  } else {
    res.locals.teacher = null;
    next();
  }
};


module.exports = { requireAuth, checkUser };