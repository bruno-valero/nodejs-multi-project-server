import { Habit } from '../../enterprise/entities/habit'

export abstract class HabitsRepository {
  abstract create(habit: Habit): Promise<void>
  abstract createMany(habit: Habit[]): Promise<void>
  abstract findById(id: string, date?: Date | undefined): Promise<Habit | null>

  abstract findManyByUserId(
    userId: string,
    filters?: { title?: string; weekDays?: number[] },
    date?: Date | undefined,
  ): Promise<Habit[]>

  abstract findManyByWeekDay(
    weekDay: number,
    userId: string,
    filters?: { title?: string; weekDays?: number[] },
    date?: Date | undefined,
  ): Promise<Habit[]>

  abstract countByWeekDay(
    weekDay: number,
    filters?: { title?: string; weekDays?: number[] },
    date?: Date | undefined,
  ): Promise<number>

  abstract update(habit: Habit): Promise<void>
  abstract updateMany(habits: Habit[]): Promise<void>

  abstract delete(habit: Habit): Promise<void>
  abstract deleteMany(habits: Habit[]): Promise<void>
}
