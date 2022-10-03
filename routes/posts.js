const express=require('express');
const router=express.Router();
const passport=require('passport');
const postController=require('../controllers/posts_controller');
//1st router.post('/create',postController.create);

//to hide so that no one can post without login using html in inspect
router.post('/create', passport.checkAuthentication, postController.create) ;

module.exports=router;