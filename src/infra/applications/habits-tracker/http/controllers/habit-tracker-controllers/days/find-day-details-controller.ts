import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'

import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { UnauthorizedError } from '@/core/errors/errors/unauthorized-error'
import { makeFindDayDetailsUseCase } from '@/infra/applications/habits-tracker/factories/use-cases/day/make-find-day-details-use-case'

import { DayPresenter } from '../../../presenters/day-presenter'

export async function findDayDetailsController(
  req: FastifyRequest,
  res: FastifyReply,
) {
  const paramsSchema = z.object({
    date: z.coerce.date(),
  })
  const userId = req.user.sub

  // console.log('findDayDetailsController req.params', req.params)
  const params = paramsSchema.parse(req.params)

  const userCase = makeFindDayDetailsUseCase()

  const resp = await userCase.execute({ date: params.date, userId })

  if (resp.isLeft()) {
    const value = resp.value

    if (value instanceof ResourceNotFoundError) {
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
    const day = presenter.details(
      value.day,
      value.day?.date ?? params.date,
      value.everyDayHabit,
    )

    res.status(200).send({ day })
  }
}
