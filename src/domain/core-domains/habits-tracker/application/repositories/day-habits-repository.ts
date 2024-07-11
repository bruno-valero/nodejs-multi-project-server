import { DayHabit } from '../../enterprise/entities/day-habit'

export abstract class DayHabitsRepository {
  abstract create(dayHabit: DayHabit): Promise<void>
  abstract createMany(dayHabit: DayHabit[]): Promise<void>

  abstract findById(id: string, date?: Date): Promise<DayHabit | null>
  abstract findByDayIdAndHabitId(
    dayId: string,
    habitId: string,
    userId: string,
    date?: Date,
  ): Promise<DayHabit | null>

  abstract findManyByUserId(userId: string, date?: Date): Promise<DayHabit[]>
  abstract findManyByDayId(dayId: string, date?: Date): Promise<DayHabit[]>
  abstract countByDayId(dayId: string, date?: Date): Promise<number>

  abstract update(dayHabit: DayHabit): Promise<void>
  abstract updateMany(dayHabits: DayHabit[]): Promise<void>

  abstract delete(dayHabit: DayHabit): Promise<void>
  abstract deleteMany(dayHabits: DayHabit[]): Promise<void>
}
