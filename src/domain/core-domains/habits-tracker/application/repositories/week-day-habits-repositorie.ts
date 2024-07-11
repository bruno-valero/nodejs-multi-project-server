import { WeekDayHabit } from '../../enterprise/entities/week-day-habit'

export abstract class WeekDayHabitsRepository {
  abstract create(weekDayHabit: WeekDayHabit): Promise<void>
  abstract createMany(weekDayHabits: WeekDayHabit[]): Promise<void>
  abstract findById(id: string): Promise<WeekDayHabit | null>
  abstract findManyByUserId(userId: string): Promise<WeekDayHabit[]>
  abstract findManyByHabitId(habitId: string): Promise<WeekDayHabit[]>
  abstract update(weekDayHabit: WeekDayHabit): Promise<void>
  abstract delete(weekDayHabit: WeekDayHabit): Promise<void>
  abstract deleteMany(weekDayHabits: WeekDayHabit[]): Promise<void>
}
