import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'

import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { UnauthorizedError } from '@/core/errors/errors/unauthorized-error'

import { makeUpdateHabitUseCase } from '../../../../factories/use-cases/habits/make-update-habit-use-case'

export async function updateHabitController(
  req: FastifyRequest,
  res: FastifyReply,
) {
  const bodySchema = z.object({
    title: z.string(),
    weekDays: z.array(z.number().min(0).max(6)).default([]),
  })

  const paramsSchema = z.object({
    id: z.string(),
  })

  const userId = req.user.sub

  const body = bodySchema.parse(req.body)
  const params = paramsSchema.parse(req.body)

  const userCase = makeUpdateHabitUseCase()

  const resp = await userCase.execute({ ...body, habitId: params.id, userId })

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
