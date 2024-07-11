import { Day } from '@/domain/core-domains/habits-tracker/enterprise/entities/day'
import { Habit } from '@/domain/core-domains/habits-tracker/enterprise/entities/habit'

import { HabitPresenter } from './habit-presenter'

export class DayPresenter {
  details(day: Day | null, date: Date, everyDayHabits: Habit[]) {
    const habitsPresenter = new HabitPresenter()

    const completedDayHabits =
      day?.dayHabits
        .getItems()
        .map((item) => habitsPresenter.basic(item.habit)) ?? []

    const dayHabits = everyDayHabits.map((item) => habitsPresenter.basic(item))

    const presenter = {
      date,
      completedDayHabits,
      dayHabits,
    }

    return presenter
  }

  completedCount(
    date: Date,
    totalDayHabits: number,
    completedDayHabits: number,
  ) {
    const presenter = {
      date,
      totalDayHabits,
      completedDayHabits,
    }

    return presenter
  }
}
