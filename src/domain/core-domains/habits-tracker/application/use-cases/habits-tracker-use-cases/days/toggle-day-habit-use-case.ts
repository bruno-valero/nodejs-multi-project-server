import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

import { Either, left, right } from '@/core/either'
import { DayAlreadyExistsError } from '@/core/errors/errors/day-already-exists-error'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { Day } from '@/domain/core-domains/habits-tracker/enterprise/entities/day'
import { DayHabit } from '@/domain/core-domains/habits-tracker/enterprise/entities/day-habit'

import { DayHabitsRepository } from '../../../repositories/day-habits-repository'
import { DaysRepository } from '../../../repositories/days-respository'
import { HabitsRepository } from '../../../repositories/habits-reposiory'
import { CreateDayUseCase } from './create-day-use-case'

export interface ToggleDayHabitUseCaseRequest {
  userId: string
  date: Date
  habitId: string
}

export type ToggleDayHabitUseCaseResponse = Either<
  DayAlreadyExistsError | ResourceNotFoundError,
  { day: Day }
>

dayjs.extend(utc)

export class ToggleDayHabitUseCase {
  constructor(
    private daysRepository: DaysRepository,
    private dayHabitsRepository: DayHabitsRepository,
    private createDayUseCase: CreateDayUseCase,
    private habitsRepository: HabitsRepository,
  ) {}

  async execute({
    userId,
    date,
    habitId,
  }: ToggleDayHabitUseCaseRequest): Promise<ToggleDayHabitUseCaseResponse> {
    date = dayjs.utc(date).startOf('day').toDate()

    console.log('findByDateAndUserId - date', date, 'userId', userId)
    const existingDay = await this.daysRepository.findByDateAndUserId(
      date,
      userId,
    )

    let currDay = existingDay
    if (!currDay) {
      const dayResp = await this.createDayUseCase.execute({
        date,
        dayHabitIds: [habitId],
        userId,
      })

      if (dayResp.isRight()) {
        const { day } = dayResp.value
        currDay = day
        return right({ day })
      }

      return left(dayResp.value)
    }

    const existingDayHabit =
      await this.dayHabitsRepository.findByDayIdAndHabitId(
        currDay.id.value,
        habitId,
        userId,
        currDay.date,
      )

    if (existingDayHabit) {
      console.log('existingDayHabit', existingDayHabit)
      await this.dayHabitsRepository.delete(existingDayHabit)
      return right({ day: currDay })
    }

    const habit = await this.habitsRepository.findById(habitId, currDay.date)

    if (!habit) return left(new ResourceNotFoundError())

    const dayHabit = DayHabit.create({
      dayId: currDay.id.value,
      habit,
      userId,
    })

    currDay.dayHabits.add(dayHabit)

    await this.daysRepository.update(currDay)

    return right({ day: currDay })
  }
}
