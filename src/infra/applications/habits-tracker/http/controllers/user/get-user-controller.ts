import { FastifyReply, FastifyRequest } from 'fastify'

import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { UnauthorizedError } from '@/core/errors/errors/unauthorized-error'

import { makeGetUserUseCase } from '../../../factories/use-cases/user/make-get-user-use-case'
import { UserPresenter } from '../../presenters/user-presenter'

export async function getUserController(
  req: FastifyRequest,
  res: FastifyReply,
) {
  const userId = req.user.sub

  const useCase = makeGetUserUseCase()

  const resp = await useCase.execute({ userId })

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
    const { user: userResp } = resp.value
    const userPresenter = new UserPresenter()
    const user = userPresenter.basic(userResp)

    res.status(200).send({ user })
  }

  res.status(500).send({ message: `internal server error.` })
}
