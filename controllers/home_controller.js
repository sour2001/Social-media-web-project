

const Post=require('../models/post');
module.exports.home=function(req,res){
    //1st console.log(req.cookies);
    //1st res.cookie('user_id',25);
    
    /*2nd Post.find({},function(err,posts){
 // return res.render('home',{
        title:"Codeal || Home",
        posts:posts
    });
    });*/


     
//populate the user of each post
Post.find({})
.populate('user')
.populate({
    path:'comments',
    populate:{
        path:'user'
    }
})
.exec( function(err, posts){
    return res.render('home',{
        title:"Codeal || Home",
        posts:posts
    });
    });
}

    //return res.end('<h1>express is up for codial!</h1>')
