const Post = require('../models/post')
module.exports.create = function(req,res){
    Post.create({
    content: req.body.content,
    
    }, function(err, post){
    if(err){consote.log('error in creating a post');return;}
    
    return res.redirect('back');
    });
} 
    
