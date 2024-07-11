import dayjs from 'dayjs'

import { Either, right } from '@/core/either'

import { Habit } from '../../../../enterprise/entities/habit'
import { WeekDayHabit } from '../../../../enterprise/entities/week-day-habit'
import { WeekDaysHabit } from '../../../../enterprise/entities/week-days-habit'
import { HabitsRepository } from '../../../repositories/habits-reposiory'

export interface CreateHabitUseCaseRequest {
  title: string
  weekDays: number[]
  userId: string
}

export type CreateHabitUseCaseResponse = Either<null, null>

export class CreateHabitUseCase {
  constructor(private habitsRepository: HabitsRepository) {}

  async execute({
    title,
    weekDays,
    userId,
  }: CreateHabitUseCaseRequest): Promise<CreateHabitUseCaseResponse> {
    const habit = Habit.create({
      title,
      userId,
      createdAt: dayjs().startOf('day').toDate(),
    })
    const weekDaysList = weekDays.map((item) =>
      WeekDayHabit.create({ habitId: habit.id.value, userId, weekDay: item }),
    )

    const weekDaysHabit = new WeekDaysHabit(weekDaysList)

    habit.setWeekDaysHabit(weekDaysHabit)

    await this.habitsRepository.create(habit)

    return right(null)
  }
}
