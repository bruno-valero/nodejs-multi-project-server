import { WeekDayHabitsRepository } from '@/domain/core-domains/habits-tracker/application/repositories/week-day-habits-repositorie'
import { WeekDayHabit } from '@/domain/core-domains/habits-tracker/enterprise/entities/week-day-habit'

export class InMemoryWeekDayHabitsRepository
  implements WeekDayHabitsRepository
{
  items: WeekDayHabit[] = []

  async create(weekDayHabit: WeekDayHabit): Promise<void> {
    this.items.push(weekDayHabit)
  }

  async findById(id: string): Promise<WeekDayHabit | null> {
    return this.items.find((item) => item.id.value === id) ?? null
  }

  async findManyByUserId(userId: string): Promise<WeekDayHabit[]> {
    return this.items.filter((item) => item.userId.value === userId)
  }

  async update(weekDayHabit: WeekDayHabit): Promise<void> {
    this.items = this.items.map((item) => {
      if (item.id.equals(weekDayHabit.id)) {
        return weekDayHabit
      }
      return item
    })
  }

  async updateMany(weekDayHabits: WeekDayHabit[]): Promise<void> {
    for (const weekDayHabit of weekDayHabits) {
      await this.update(weekDayHabit)
    }
  }

  async delete(weekDayHabit: WeekDayHabit): Promise<void> {
    this.items = this.items.filter((item) => !item.id.equals(weekDayHabit.id))
  }

  async deleteMany(weekDayHabits: WeekDayHabit[]): Promise<void> {
    for (const weekDayHabit of weekDayHabits) {
      await this.delete(weekDayHabit)
    }
  }
}
