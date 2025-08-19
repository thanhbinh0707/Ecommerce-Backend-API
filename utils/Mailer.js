const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    pool:true,
    host: 'smtp.gmail.com',
    port: 465,
    secure:true,
    auth: {
        user: 'thanhbjnk777@gmail.com',
        pass: 'wrkimkcwzioomxio'
    },

});
const sendMail = async (data) => {
    try{
        const {email, subject, content} = data;
        const mailOptions = {
            from: 'thanhbjnk777@gmail.com',
            to:email,
            subject,
            html: content
        };
        await transporter.sendMail(mailOptions);
        return true;
    }catch(err){
        console.log(err);
        throw new Error("Error occurred while sending mail");
    }

};
module.exports = {
    sendMail,
}