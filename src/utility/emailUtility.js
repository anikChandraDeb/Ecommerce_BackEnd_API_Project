const nodemailer=require('nodemailer');
const {EMAIL_HOST,EMAIL_PORT,EMAIL_USER,EMAIL_PASSWORD}=require('../config/config');

const EmailSend = async (EmailTo,EmailText,EmailSubject)=>{
    const transporter = nodemailer.createTransport({
        host:EMAIL_HOST,
        port:EMAIL_PORT,
        secure:true,
        auth:{
            user:EMAIL_USER,
            pass: EMAIL_PASSWORD
        },
        tls:{
            rejectUnauthorized:false
        }
    });

    const mailOption = {
        from: EMAIL_USER,
        to:EmailTo,
        subject: EmailSubject,
        text: EmailText,
    }

    try{
        await transporter.sendMail(mailOption);
        return true;
    }catch(error){
        return false;
    }
}

module.exports=EmailSend;