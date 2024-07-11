import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'

import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { UnauthorizedError } from '@/core/errors/errors/unauthorized-error'

import { makeAuthJwtUseCase } from '../../../factories/use-cases/user/make-auth-jwt-use-case'

export async function authJwtController(
  req: FastifyRequest,
  res: FastifyReply,
) {
  const bodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  })

  const body = bodySchema.parse(req.body)

  const useCase = makeAuthJwtUseCase(res)

  const resp = await useCase.execute(body)

  if (resp.isLeft()) {
    const value = resp.value

    if (value instanceof ResourceNotFoundError) {
      res.status(404).send({ message: value.message })
    }

    if (value instanceof UnauthorizedError) {
      res.status(409).send({ message: value.message })
    }

    res.status(400).send({ message: `bad request.` })
  }

  if (resp.isRight()) {
    const { token } = resp.value

    res
      .setCookie('@habit-tracker:user', token, {
        path: '/',
        secure: true,
        httpOnly: true,
        sameSite: 'none',
      })
      .status(204)
      .send()
  }

  res.status(500).send({ message: `internal server error.` })
}
