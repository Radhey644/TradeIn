import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcrypt"


export const sendEmail = async({fullname,email, emailType, userId}:any) => {
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
              clientId: process.env.NODE_MAILER_CLIENT_ID, // Your OAuth2 client ID
              clientSecret: process.env.NODE_MAILER_CLIENT_SECRET, // Your OAuth2 client secret
              refreshToken: process.env.NODE_MAILER_REFRESH_TOKEN, // Your OAuth2 refresh token
            },
          });


        const mailOptions = {
            from: 'tradein09@gmail.com',
            to: email,
            subject: "Welcome to TradeIn",
            html: `
            <p>Hello ${fullname},</p>
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