import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'

import { makeCreateHabitUseCase } from '../../../../factories/use-cases/habits/make-create-habit-use-case'

export async function createHabitController(
  req: FastifyRequest,
  res: FastifyReply,
) {
  const bodySchema = z.object({
    title: z.string(),
    weekDays: z.array(z.number().min(0).max(6)).default([]),
  })
  const userId = req.user.sub
  const body = bodySchema.parse(req.body)

  const userCase = makeCreateHabitUseCase()

  const resp = await userCase.execute({ ...body, userId })

  if (resp.isLeft()) {
    // const value = resp.value

    res.status(400).send({ message: `bad request.` })
  }

  if (resp.isRight()) {
    // const value = resp.value
    res.status(201).send()
  }
}
