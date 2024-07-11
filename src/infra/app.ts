import { readFileSync } from 'node:fs'

import fastifyCookie from '@fastify/cookie'
import cors from '@fastify/cors'
import fastifyJwt from '@fastify/jwt'
import fastify from 'fastify'
import { ZodError } from 'zod'

import { DataValidationError } from '@/core/errors/errors/data-validation-error'

import { application } from './applications/habits-tracker/routes/application'
import { users } from './applications/habits-tracker/routes/users'
// import fastifyPassport from '@fastify/passport'
// import secureSession from '@fastify/secure-session'
// import JwtStrategy from 'passport-jwt'
// import ExtractJwt from 'passport-jwt'
import { env } from './env'

export const app = fastify({ logger: true })

app.register(cors, {
  origin: [`http://localhost:${env.PORT}`, 'http://localhost:3000'],
  allowedHeaders: [
    'Origin',
    'x-requested-with',
    'accept',
    'content-type',
    'authorization',
  ],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  credentials: true,
})

app.register(fastifyJwt, {
  secret: {
    private: readFileSync('./keys/private_key.pem', 'utf8'),
    public: readFileSync('./keys/public_key.pem', 'utf8'),
  },
  sign: { algorithm: 'RS256' },
  cookie: {
    cookieName: '@habit-tracker:user',
    signed: false,
  },
})

app.register(fastifyCookie)

app.register(application, { prefix: '/habits-tracker' })
app.register(users, { prefix: '/habits-tracker' })

app.setErrorHandler((err, _req, res) => {
  if (env.NODE_ENV !== 'prod') {
    console.error(err)
  }
  if (err instanceof ZodError) {
    return res
      .status(400)
      .send({ message: 'Validation error', issues: err.format() })
  }
  if (err instanceof DataValidationError) {
    return res
      .status(400)
      .send({ message: 'Validation error', issues: err.message })
  }
  return res.status(500).send({ message: 'Internal server error.' })
})

// app.register(secureSession, {
//   key: readFileSync('./keys/secure-session-key.pem'),
// })

// app.register(fastifyPassport.initialize())
// app.register(fastifyPassport.secureSession())

// fastifyPassport.use(
//   'jwt',
//   new JwtStrategy.Strategy({
//     jwtFromRequest: ExtractJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
//     secretOrKey:
//   }),
// )
