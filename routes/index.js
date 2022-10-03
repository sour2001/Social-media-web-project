const express=require('express');
const router=express.Router();

const homeController=require('../controllers/home_controller');
console.log('router loaded');
router.get('/',homeController.home);
//fir any fi=urther routed .access from here
//router.use('/routerName',require('./routerfile'))'
router.use('/users',require('./users'));
router.use('/posts',require('./posts'));

module.exports=router;