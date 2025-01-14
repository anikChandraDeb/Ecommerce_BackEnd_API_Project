const jwt=require('jsonwebtoken');
const {JWT_SECRET,JWT_EXPIRATION_TIME}=require('../config/config');

exports.EncodeToken=(email,user_id)=>{
    const KEY = JWT_SECRET;
    const EXPIRE={expiresIn:JWT_EXPIRATION_TIME};
    // const EXPIRE={expiresIn:'24h'};
    const PAYLOAD={email:email,user_id:user_id};
    return jwt.sign(PAYLOAD,KEY,EXPIRE);
}

exports.DecodeToken=(token)=>{
    try{
        return jwt.verify(token,JWT_SECRET);
    }catch(error){
        return null;
    }
}