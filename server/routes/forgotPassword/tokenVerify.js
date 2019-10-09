const express = require('express');
const router = express.Router();
const {users} = require('../../connections/connections')


router.post("/token",(req,res)=>{
    // console.log('hi ',req.body.resetToken);
    users.collection('users').findOne({resetToken: req.body.resetToken},(err,user) => {
        if (err) throw err
        if(user === null) {
            console.log("reset link invalid");
            res.status(400).send({
                message: "not ok",
            });
        } else{
            console.log(user.resetTokenTime);
            if(Date.now() < user.resetTokenTime){
                res.status(200).send({
                    email: user.email,
                    message: 'all ok',
                    expiresin: user.resetTokenTime
                });
            }
            else {
                res.status(400).json("link has expired mofus");
            }
        }
    });
});

module.exports=router