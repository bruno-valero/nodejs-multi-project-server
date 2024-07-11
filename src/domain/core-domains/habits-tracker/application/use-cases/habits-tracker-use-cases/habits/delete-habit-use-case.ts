import { Either, left, right } from '@/core/either'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { UnauthorizedError } from '@/core/errors/errors/unauthorized-error'

import { HabitsRepository } from '../../../repositories/habits-reposiory'

export interface DeleteHabitUseCaseRequest {
  habitId: string
  userId: string
}

export type DeleteHabitUseCaseResponse = Either<
  ResourceNotFoundError | UnauthorizedError,
  null
>

export class DeleteHabitUseCase {
  constructor(private habitsRepository: HabitsRepository) {}

  async execute({
    habitId,
    userId,
  }: DeleteHabitUseCaseRequest): Promise<DeleteHabitUseCaseResponse> {
    const existingHabit = await this.habitsRepository.findById(habitId)

    if (!existingHabit) return left(new ResourceNotFoundError())

    if (existingHabit.userId.value !== userId)
      return left(new UnauthorizedError())

    await this.habitsRepository.delete(existingHabit)

    return right(null)
  }
}
