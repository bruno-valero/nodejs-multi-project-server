import crypto from 'node:crypto'
import fs from 'node:fs'

const key = crypto.randomBytes(32).toString('hex')

if (!fs.existsSync('./keys')) {
  fs.mkdir('./keys', { recursive: true }, (err) => console.log('error:', err))
}
fs.writeFileSync('./keys/secure-session-key.pem', key)
