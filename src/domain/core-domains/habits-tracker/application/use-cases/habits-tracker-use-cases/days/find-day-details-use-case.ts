import dayjs from 'dayjs'

import { Either, left, right } from '@/core/either'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { UnauthorizedError } from '@/core/errors/errors/unauthorized-error'
import { Day } from '@/domain/core-domains/habits-tracker/enterprise/entities/day'
import { Habit } from '@/domain/core-domains/habits-tracker/enterprise/entities/habit'

import { DaysRepository } from '../../../repositories/days-respository'
import { HabitsRepository } from '../../../repositories/habits-reposiory'

export interface FindDayDetailsUseCaseRequest {
  userId: string
  date: Date
}

export type FindDayDetailsUseCaseResponse = Either<
  ResourceNotFoundError | UnauthorizedError,
  { day: Day | null; everyDayHabit: Habit[] }
>

export class FindDayDetailsUseCase {
  constructor(
    private daysRepository: DaysRepository,
    private habitsRepository: HabitsRepository,
  ) {}

  async execute({
    date,
    userId,
  }: FindDayDetailsUseCaseRequest): Promise<FindDayDetailsUseCaseResponse> {
    const existingDay = await this.daysRepository.findByDateAndUserId(
      date,
      userId,
    )

    // if (!existingDay) return left(new ResourceNotFoundError())

    const weekDay = existingDay
      ? dayjs(existingDay.date).get('day')
      : dayjs(date).get('day')

    const everyDayHabit = await this.habitsRepository.findManyByWeekDay(
      weekDay,
      userId,
      undefined,
      existingDay?.date ?? date,
    )

    if (existingDay && existingDay.userId.value !== userId)
      return left(new UnauthorizedError())

    return right({ day: existingDay, everyDayHabit })
  }
}
