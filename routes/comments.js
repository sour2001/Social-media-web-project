const express=require('express');
const router=express.Router();
const passport=require('passport');
const commentsController=require('../controllers/comments_controller');
//1st router.post('/create',postController.create);

//to hide so that no one can post without login using html in inspect
router.post('/create', passport.checkAuthentication, commentsController.create) ;

module.exports=router;