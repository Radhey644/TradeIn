import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcrypt"


export const sendEmail = async({email, emailType, userId}:any) => {
    try {
        // create a hased token
        const hashedToken = await bcryptjs.hash(userId.toString(), 10)

        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId, 
                {verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 3600000})
        } else if (emailType === "RESET"){
            await User.findByIdAndUpdate(userId, 
                {forgotPasswordToken: hashedToken, forgotPasswordTokenExpiry: Date.now() + 3600000})
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              type: 'OAuth2',
              user: 'rahulisop135@gmail.com', // Your Gmail email address
              clientId: '934827094292-lme7f8a93ur4s0loo8p5jivosc59to8c.apps.googleusercontent.com', // Your OAuth2 client ID
              clientSecret: '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', // Your OAuth2 client secret
              refreshToken: '1//04VZYXEHR-OORCgYIARAAGAQSNwF-L9Ir2UW_j7QABJIlSBlsl55MwgeJ3M7gopQZecCJKJk_T_wkpMjU5PXlZWnBALo7t_UzsX8', // Your OAuth2 refresh token
            },
          });


        const mailOptions = {
            from: 'tradein09@gmail.com',
            to: email,
            subject: "Welcome to TradeIn",
            html: `
            <p>Hello ${email},</p>
            <p>Welcome to TradeIn, your platform for practicing stock trading strategies!</p>
            <p>We're excited to have you on board. With TradeIn, you can trade virtual money and test your strategies risk-free.</p>
            <p>Feel free to explore our platform and get started with virtual trading today.</p>
            <p>Happy trading!</p>
            <p>Best regards,<br>Your TradeIn Team</p>
          `
        }

        const mailresponse = await transporter.sendMail
        (mailOptions);
        return mailresponse;

    } catch (error:any) {
        throw new Error(error.message);
    }
}