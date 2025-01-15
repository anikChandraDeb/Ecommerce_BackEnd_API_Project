const {DecodeToken}=require('../utility/tokenUtility');

module.exports=(req,res,next)=>{
    let token=req.headers['token'];
    
    if(!token){
        token=req.cookies['token'];
    }

    let decoded=DecodeToken(token);
    if(decoded==null){
        return res.status(401).json({"Status":"Failed","Message":"Unauthorized!"});
    }
    else{
        //email, user_id take from decoded token
        let email = decoded.email;
        let user_id=decoded.user_id;
        //email,user_id add with request header
        req.headers.email=email;
        req.headers.user_id=user_id;
        next();
    }
}