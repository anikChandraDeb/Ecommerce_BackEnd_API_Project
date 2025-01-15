const UserModel = require("../models/UserModel");
const EmailSend = require("../utility/emailUtility");

const UserOTPService=async(req)=>{
    try{
        let email=req.params.email;
        //generate a random number between 100000 to 999999
        //Math.random() [0,0.999999...] so Math.random()*900000 [0,899999.999]
        let code=Math.floor(100000+Math.random()*900000);
        let EmailText=`Your Verification Code is ${code}`;
        let EmailSubject='Email Verification';
        await EmailSend(email,EmailText,EmailSubject);
        //for upsert option if data availble then update otherwise insert
        await UserModel.updateOne({email:email},{$set:{otp:code}},{upsert:true});
        return {"Status":"Success","Message":"6 Digit OTP has been send"};
    }catch(e){
        return {"Status":"Failed","Message":"Something Went Wrong"};

    }
}

const VerifyOTPService=async(req)=>{
    
}

const LogoutService=async(req)=>{
    
}

const CreateProfileService=async(req)=>{
    
}

const UpdateProfileService=async(req)=>{
    
}

const ReadProfileService=async(req)=>{
    
}

module.exports={
    UserOTPService,
    VerifyOTPService,
    LogoutService,
    CreateProfileService,
    UpdateProfileService,
    ReadProfileService
}