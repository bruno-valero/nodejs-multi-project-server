import { Habit } from '@/domain/core-domains/habits-tracker/enterprise/entities/habit'

export class HabitPresenter {
  basic(habit: Habit) {
    const presenter = {
      id: habit.id.value,
      title: habit.title,
      weekDays: habit.weekDaysHabit.getItems().map((item) => item.weekDay),
    }

    return presenter
  }
}
