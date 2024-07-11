import { Either, left, right } from '@/core/either'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { UnauthorizedError } from '@/core/errors/errors/unauthorized-error'

import { Habit } from '../../../../enterprise/entities/habit'
import { HabitsRepository } from '../../../repositories/habits-reposiory'

export interface FindHabitUseCaseRequest {
  habitId: string
  userId: string
}

export type FindHabitUseCaseResponse = Either<
  ResourceNotFoundError | UnauthorizedError,
  { habit: Habit }
>

export class FindHabitUseCase {
  constructor(private habitsRepository: HabitsRepository) {}

  async execute({
    habitId,
    userId,
  }: FindHabitUseCaseRequest): Promise<FindHabitUseCaseResponse> {
    const existingHabit = await this.habitsRepository.findById(habitId)

    if (!existingHabit) return left(new ResourceNotFoundError())

    if (existingHabit.userId.value !== userId)
      return left(new UnauthorizedError())

    return right({ habit: existingHabit })
  }
}
