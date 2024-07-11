import dayjs from 'dayjs'
import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'

import { DayAlreadyExistsError } from '@/core/errors/errors/day-already-exists-error'
import { UnauthorizedError } from '@/core/errors/errors/unauthorized-error'
import { makeFetchDaysWithCompletedNumberUseCase } from '@/infra/applications/habits-tracker/factories/use-cases/day/make-fetch-days-with-completed-number-use-case'

import { DayPresenter } from '../../../presenters/day-presenter'

export async function fetchDaysWithCompletedNumberController(
  req: FastifyRequest,
  res: FastifyReply,
) {
  const querySchema = z.object({
    from: z.coerce.date().default(dayjs().startOf('year').toDate()),
    to: z.coerce.date().default(new Date()),
  })
  const userId = req.user.sub

  console.log('req.query', req.query)
  const query = querySchema.parse(req.query)

  const userCase = makeFetchDaysWithCompletedNumberUseCase()

  const resp = await userCase.execute({ userId, range: query })

  if (resp.isLeft()) {
    const value = resp.value

    if (value instanceof DayAlreadyExistsError) {
      res.status(400).send({ message: value.message })
    }

    if (value instanceof UnauthorizedError) {
      res.status(409).send({ message: value.message })
    }

    res.status(400).send({ message: value.message })
  }

  if (resp.isRight()) {
    const value = resp.value
    const presenter = new DayPresenter()

    const days = value.map((item) =>
      presenter.completedCount(
        item.day.date,
        item.totalDayHabitsCount,
        item.completedDayHabitsCount,
      ),
    )

    res.status(200).send({ days })
  }
}
