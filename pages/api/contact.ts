import { VercelRequest, VercelResponse } from "@vercel/node"
import { ContactFormType } from "../../types/forms"
import nodemailer from "nodemailer"

async function contact(req: VercelRequest, res: VercelResponse) {
  const { email, message } = JSON.parse(req.body) as ContactFormType

  if (email !== undefined && message !== undefined) {
    let transporter = nodemailer.createTransport({
      host: "smtp.fastmail.com",
      port: 465,
      service: "FastMail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    })

    try {
      const info = await transporter.sendMail({
        from: `${email}`,
        to: "info@ronandoherty.com",
        subject: `Blog Contact (${email})`,
        text: message,
      })
      console.log(info)
      res.statusCode = 200
      res.json({
        message: "SUCCESS",
        code: 200,
      })
    } catch (err) {
      console.error("error: ", err)
      if (err instanceof Object) {
        res.statusCode = (err as any).responseCode
        res.json({
          message: "FAILURE",
          code: (err as any).responseCode,
        })
      }
    }
  } else {
    res.statusMessage = "MISSING_REQUIRED_DATA"
    res.json({
      error: "MISSING_REQUIRED_DATA",
      message: "Email address or message were not received",
    })
  }
}

module.exports = contact
