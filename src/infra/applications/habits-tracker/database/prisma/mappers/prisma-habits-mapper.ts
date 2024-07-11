import { PrismaHabit } from '@root/prisma/generated/habits-tracker'

import { Habit } from '@/domain/core-domains/habits-tracker/enterprise/entities/habit'
import { WeekDayHabit } from '@/domain/core-domains/habits-tracker/enterprise/entities/week-day-habit'
import { WeekDaysHabit } from '@/domain/core-domains/habits-tracker/enterprise/entities/week-days-habit'

export class PrismaHabitsMapper {
  static toDomain(
    habit: PrismaHabit,
    domainWeekDayHabit: WeekDayHabit[],
  ): Habit {
    const weekDaysHabit = new WeekDaysHabit(domainWeekDayHabit)

    const newHabit = Habit.create(
      {
        title: habit.title,
        createdAt: habit.createdAt,
        weekDaysHabit,
        userId: habit.userId,
      },
      habit.id,
    )

    return newHabit
  }

  static domainToPrisma(habit: Habit): PrismaHabit {
    const newHabit: PrismaHabit = {
      createdAt: habit.createdAt,
      id: habit.id.value,
      title: habit.title,
      userId: habit.userId.value,
    }
    return newHabit
  }
}
