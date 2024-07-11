import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'

import { makeFetchHabitsUseCase } from '../../../../factories/use-cases/habits/make-fetch-habits-use-case'
import { HabitPresenter } from '../../../presenters/habit-presenter'

export async function fetchHabitsController(
  req: FastifyRequest,
  res: FastifyReply,
) {
  const querySchema = z
    .object({
      title: z.string().optional(),
      weekDays: z.array(z.number()).optional(),
    })
    .optional()

  const userId = req.user.sub

  const query = querySchema.parse(req.query)

  const userCase = makeFetchHabitsUseCase()

  const resp = await userCase.execute({ userId, filters: query })

  if (resp.isLeft()) {
    // const value = resp.value

    res.status(400).send({ message: `bad request.` })
  }

  if (resp.isRight()) {
    const value = resp.value
    console.log('value', value)
    const presenter = new HabitPresenter()
    const habits = value.habits.map((item) => presenter.basic(item))
    res.status(200).send({ habits })
  }
}
