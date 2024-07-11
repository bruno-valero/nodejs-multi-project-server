import dayjs from 'dayjs'

import { Either, right } from '@/core/either'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { UnauthorizedError } from '@/core/errors/errors/unauthorized-error'
import { Day } from '@/domain/core-domains/habits-tracker/enterprise/entities/day'

import { DayHabitsRepository } from '../../../repositories/day-habits-repository'
import { DaysRepository } from '../../../repositories/days-respository'
import { HabitsRepository } from '../../../repositories/habits-reposiory'

export interface FetchDaysWithCompletedNumberUseCaseRequest {
  userId: string
  range: {
    from: Date
    to: Date
  }
}

export type FetchDaysWithCompletedNumberUseCaseResponse = Either<
  ResourceNotFoundError | UnauthorizedError,
  {
    day: Day
    totalDayHabitsCount: number
    completedDayHabitsCount: number
  }[]
>

export class FetchDaysWithCompletedNumberUseCase {
  constructor(
    private daysRepository: DaysRepository,
    private habitsRepository: HabitsRepository,
    private dayHabitsRepository: DayHabitsRepository,
  ) {}

  async execute({
    userId,
    range,
  }: FetchDaysWithCompletedNumberUseCaseRequest): Promise<FetchDaysWithCompletedNumberUseCaseResponse> {
    const days = await this.daysRepository.findManyByUserIdAndDateRange(
      userId,
      range,
    )

    const result = await Promise.all(
      days.map(async (day) => {
        const weekDay = dayjs(day?.date).get('day')
        const totalDayHabitsCount = await this.habitsRepository.countByWeekDay(
          weekDay,
          undefined,
          day.date,
        )
        const completedDayHabitsCount =
          await this.dayHabitsRepository.countByDayId(day.id.value, day.date)

        return {
          day,
          totalDayHabitsCount,
          completedDayHabitsCount,
        }
      }),
    )

    return right(result)
  }
}
