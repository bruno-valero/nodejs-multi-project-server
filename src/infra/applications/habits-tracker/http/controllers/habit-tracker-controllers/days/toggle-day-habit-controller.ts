import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'

import { DayAlreadyExistsError } from '@/core/errors/errors/day-already-exists-error'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { makeToggleDayHabitUseCase } from '@/infra/applications/habits-tracker/factories/use-cases/day/make-toggle-day-habit-use-case'

export async function toggleDayHabitController(
  req: FastifyRequest,
  res: FastifyReply,
) {
  const querySchema = z.object({
    date: z.coerce.date().optional().default(new Date()),
    habitId: z.string().uuid(),
  })
  const userId = req.user.sub

  console.log('toggleDayHabitController req.query', req.query)
  const query = querySchema.parse(req.query)

  const userCase = makeToggleDayHabitUseCase()

  const resp = await userCase.execute({ ...query, userId })

  if (resp.isLeft()) {
    const value = resp.value

    if (value instanceof DayAlreadyExistsError) {
      res.status(400).send({ message: value.message })
    }

    if (value instanceof ResourceNotFoundError) {
      res.status(404).send({ message: value.message })
    }

    res.status(400).send({ message: value.message })
  }

  if (resp.isRight()) {
    // const value = resp.value
    res.status(204).send()
  }
}
