const { Router } = require('express');
const {requireAuth,checkUser} = require('../middleware/authMiddleware')
const authController = require('../controllers/authController');
const contTeacher = require('../controllers/controller.teacher')
const contStudent = require('../controllers/controller.student')

const router = Router();

router.post('/signup', authController.signup_post);
router.post('/login', authController.login_post);
router.get('/logout', authController.logout_get);
router.get('/getVIP',requireAuth,checkUser, authController.getVIP);
router.post('/upExam',contTeacher.uploadExam);
router.post('/upSerie',contTeacher.uploadSerie);
router.post('/upVideo',contTeacher.uploadVideo);
router.get('/getAllFiles',contStudent.getAllFiles);
router.get('/getOwnStatistique',contTeacher.getOwnStatistique);
// for teacher 
// get Videos
router.get('/getVideos',contTeacher.getVideos);
// get exams 
router.get('/getExams',contTeacher.getExams);

// get series
router.get('/getSeries',contTeacher.getSeries);



module.exports = router;