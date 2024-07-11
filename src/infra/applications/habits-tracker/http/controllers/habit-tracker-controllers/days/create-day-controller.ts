import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'

import { DayAlreadyExistsError } from '@/core/errors/errors/day-already-exists-error'

import { makeDayUseCase } from '../../../../factories/use-cases/day/make-create-day-use-case'

export async function createDayController(
  req: FastifyRequest,
  res: FastifyReply,
) {
  const bodySchema = z.object({
    date: z.coerce.date(),
    dayHabitIds: z.array(z.string()).min(1),
  })
  const userId = req.user.sub

  const body = bodySchema.parse(req.body)

  const userCase = makeDayUseCase()

  const resp = await userCase.execute({ ...body, userId })

  if (resp.isLeft()) {
    const value = resp.value

    if (value instanceof DayAlreadyExistsError) {
      res.status(400).send({ message: value.message })
    }

    res.status(400).send({ message: value.message })
  }

  if (resp.isRight()) {
    // const value = resp.value
    res.status(201).send()
  }
}
