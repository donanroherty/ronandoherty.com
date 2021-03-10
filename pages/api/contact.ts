
import { VercelRequest, VercelResponse } from '@vercel/node'
import { ContactFormType } from '../../types/forms'

function contact(req: VercelRequest, res: VercelResponse) {
  const { email, message } = JSON.parse(req.body) as ContactFormType

  if (email !== undefined && message !== undefined) {
    res.json({ email: email, message: message })
  }
  else {
    res.statusCode = 422
    res.statusMessage = 'MISSING_DATA'
    res.json({ error: 'Email address or message were not received' })
  }
}

module.exports = contact
