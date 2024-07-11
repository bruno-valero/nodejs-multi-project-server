import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

import { Either, left, right } from '@/core/either'
import { DayAlreadyExistsError } from '@/core/errors/errors/day-already-exists-error'

import { Day } from '../../../../enterprise/entities/day'
import { DayHabit } from '../../../../enterprise/entities/day-habit'
import { DayHabits } from '../../../../enterprise/entities/day-habits'
import { Habit } from '../../../../enterprise/entities/habit'
import { DaysRepository } from '../../../repositories/days-respository'
import { HabitsRepository } from '../../../repositories/habits-reposiory'

export interface CreateDayUseCaseRequest {
  date: Date
  userId: string
  dayHabitIds: string[]
}

export type CreateDayUseCaseResponse = Either<
  DayAlreadyExistsError,
  { day: Day }
>

dayjs.extend(utc)

export class CreateDayUseCase {
  constructor(
    private daysRepository: DaysRepository,
    private habitsRepository: HabitsRepository,
  ) {}

  async execute({
    date,
    dayHabitIds,
    userId,
  }: CreateDayUseCaseRequest): Promise<CreateDayUseCaseResponse> {
    date = dayjs.utc(date).startOf('day').toDate()

    const existingDay = await this.daysRepository.findByDateAndUserId(
      date,
      userId,
    )

    const datejs = dayjs.utc(date)
    if (existingDay)
      return left(new DayAlreadyExistsError(datejs.format('DD-MM-YYYY')))

    const habits = (
      await Promise.all(
        dayHabitIds.map(async (item) => {
          const habit = await this.habitsRepository.findById(item)
          return habit
        }),
      )
    ).filter((item): item is Habit => !!item)

    const day = Day.create({
      date,
      userId,
      dayHabits: new DayHabits([]),
    })

    const dayHabitLists = habits.map((item) =>
      DayHabit.create({
        dayId: day.id.value,
        habit: item,
        userId,
      }),
    )

    const dayHabits = new DayHabits(dayHabitLists)

    day.setDayHabits(dayHabits)

    await this.daysRepository.create(day)

    return right({ day })
  }
}
