import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'

import { UserAlreadyExistsError } from '@/core/errors/errors/user-already-exists-error'

import { makeRegisterJwtUseCase } from '../../../factories/use-cases/user/make-register-jwt-use-case'

export async function registerJwtController(
  req: FastifyRequest,
  res: FastifyReply,
) {
  const bodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  })

  const body = bodySchema.parse(req.body)

  const useCase = makeRegisterJwtUseCase()

  const resp = await useCase.execute(body)

  if (resp.isLeft()) {
    const value = resp.value
    console.log('isLeft', value)
    if (value instanceof UserAlreadyExistsError) {
      res.status(400).send({ message: value.message })
    }

    res.status(400).send({ message: `bad request.` })
  }

  if (resp.isRight()) {
    console.log('isRight')
    // const value= resp.value

    res.status(204).send()
  }

  res.status(500).send({ message: `internal server error.` })
}
