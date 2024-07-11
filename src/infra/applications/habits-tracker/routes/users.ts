import { FastifyInstance } from 'fastify'

import { authJwtController } from '../http/controllers/user/auth-jwt-controller'
import { getUserController } from '../http/controllers/user/get-user-controller'
import { registerJwtController } from '../http/controllers/user/register-jwt'
import { jwtVerify } from '../http/middlewares/jwtVerify'

export async function users(app: FastifyInstance) {
  app.post('/users/register/jwt', registerJwtController)
  app.post('/users/authenticate/jwt', authJwtController)
  app.get('/users', { onRequest: [jwtVerify] }, getUserController)
}
