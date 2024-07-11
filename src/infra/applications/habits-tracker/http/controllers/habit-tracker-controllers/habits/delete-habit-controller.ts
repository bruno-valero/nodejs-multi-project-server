import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'

import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { UnauthorizedError } from '@/core/errors/errors/unauthorized-error'

import { makeDeleteHabitUseCase } from '../../../../factories/use-cases/habits/make-delete-habit-use-case'

export async function deleteHabitController(
  req: FastifyRequest,
  res: FastifyReply,
) {
  const paramsSchema = z.object({
    id: z.string(),
  })
  const userId = req.user.sub

  const params = paramsSchema.parse(req.params)

  const userCase = makeDeleteHabitUseCase()

  const resp = await userCase.execute({ habitId: params.id, userId })

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
    // const value = resp.value
    res.status(204).send()
  }
}
