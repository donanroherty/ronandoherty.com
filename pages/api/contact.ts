
import { VercelRequest, VercelResponse } from '@vercel/node'
import { ContactFormType } from '../../types/forms'
import nodemailer from 'nodemailer'

async function contact(req: VercelRequest, res: VercelResponse) {
  const { email, message } = JSON.parse(req.body) as ContactFormType

  if (email !== undefined && message !== undefined) {

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      service: 'Gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
      }
    })

    try {
      const info = await transporter.sendMail(
        {
          from: 'ronandohertydev@gmail.com',
          to: 'ronandohertydev@gmail.com',
          subject: `Blog Contact (${email})`,
          text: message
        }
      )
      console.log(info)
    } catch (err) {
      console.error('error: ', err)
    }

    res.json({ error: null, message: 'message sent successfully' })
  }
  else {
    res.statusCode = 422
    res.statusMessage = 'MISSING_REQUIRED_DATA'
    res.json({ error: 'MISSING_REQUIRED_DATA', message: 'Email address or message were not received' })
  }
}

module.exports = contact
