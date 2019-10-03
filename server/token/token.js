const jwt = require('jsonwebtoken');
const secret = require('../config/key').secretOrKey;

module.exports = {
    auth_user:function(req,res,next){
        var token;
        if(req.token || req.body.token || req.query.token || req.header['x-access-token']){
            token = req.token || req.body.token || req.query.token || req.header['x-access-token']
        }
        else if(req.headers.authorization && req.headers.authorization.split(' ')[0]==="Bearer" && req.headers.authorization.split(' ')[1]){
            token = req.headers.authorization.split(' ')[1];
        }
        else if(req.cookies && req.cookies.token){
            token = req.cookies.token;
        }
        if(token){
            jwt.verify(token,secret,{algorithms:['HS384']},(err,decoded) => {
                if(err){
                    return res.status(401).json({succes:false,message:'error occured'})
                }
                else{
                    console.log(decoded);
                    if(decoded.email==req.body.email){
                        req.decoded = decoded;
                        req.token = token;
                        next();
                    }
                    else{
                        return res.status(401).json({succes:false,message:'invalid token'})
                    }
                    
                }
            })
        }
        else{
            return res.status(401).json({sucess:false,message:'no token provided'})
        }
    },
    auth:function(req,res,next){
        var token;
        if(req.token || req.body.token || req.query.token || req.header['x-access-token']){
            token = req.token || req.body.token || req.query.token || req.header['x-access-token']
        }
        else if(req.headers.authorization && req.headers.authorization.split(' ')[0]==="Bearer" && req.headers.authorization.split(' ')[1]){
            token = req.headers.authorization.split(' ')[1];
        }
        else if(req.cookies && req.cookies.token){
            token = req.cookies.token;
        }
        if(token){
            jwt.verify(token,secret,{algorithms:['HS384']},(err,decoded) => {
                if(err){
                    return res.status(401).json({succes:false,message:'error occured'})
                }
                else{
                    
                        req.decoded = decoded;
                        req.token = token;
                        next();
                    
                    
                }
            })
        }
        else{
            return res.status(401).json({sucess:false,message:'no token provided'})
        }
    }
}
