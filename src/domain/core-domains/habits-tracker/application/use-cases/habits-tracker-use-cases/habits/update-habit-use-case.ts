import { Either, left, right } from '@/core/either'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { UnauthorizedError } from '@/core/errors/errors/unauthorized-error'

import { WeekDayHabit } from '../../../../enterprise/entities/week-day-habit'
import { HabitsRepository } from '../../../repositories/habits-reposiory'

export interface UpdateHabitUseCaseRequest {
  habitId: string
  userId: string
  title: string
  weekDays: number[]
}

export type UpdateHabitUseCaseResponse = Either<
  ResourceNotFoundError | UnauthorizedError,
  null
>

export class UpdateHabitUseCase {
  constructor(private habitsRepository: HabitsRepository) {}

  async execute({
    habitId,
    userId,
    title,
    weekDays,
  }: UpdateHabitUseCaseRequest): Promise<UpdateHabitUseCaseResponse> {
    const existingHabit = await this.habitsRepository.findById(habitId)

    if (!existingHabit) return left(new ResourceNotFoundError())

    if (existingHabit.userId.value !== userId)
      return left(new UnauthorizedError())

    const weekDaysList = weekDays.map((item) =>
      WeekDayHabit.create({
        habitId: existingHabit.id.value,
        userId,
        weekDay: item,
      }),
    )

    existingHabit.weekDaysHabit.update(weekDaysList)
    existingHabit.setTitle(title)

    await this.habitsRepository.update(existingHabit)

    return right(null)
  }
}
