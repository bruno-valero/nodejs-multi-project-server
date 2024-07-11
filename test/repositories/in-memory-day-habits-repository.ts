import { DayHabitsRepository } from '@/domain/core-domains/habits-tracker/application/repositories/day-habits-repository'
import { DayHabit } from '@/domain/core-domains/habits-tracker/enterprise/entities/day-habit'

export class InMemoryDayHabitsRepository implements DayHabitsRepository {
  items: DayHabit[] = []

  async create(dayHabit: DayHabit): Promise<void> {
    this.items.push(dayHabit)
  }

  async createMany(dayHabits: DayHabit[]): Promise<void> {
    for (const dayHabit of dayHabits) {
      await this.create(dayHabit)
    }
  }

  async findById(id: string): Promise<DayHabit | null> {
    return this.items.find((item) => item.id.value === id) ?? null
  }

  async findManyByUserId(userId: string): Promise<DayHabit[]> {
    return this.items.filter((item) => item.userId.value === userId)
  }

  async findManyByDayId(dayId: string): Promise<DayHabit[]> {
    return this.items.filter((item) => item.dayId.value === dayId)
  }

  async update(dayHabit: DayHabit): Promise<void> {
    this.items = this.items.map((item) => {
      if (item.id.equals(dayHabit.id)) {
        return dayHabit
      }
      return item
    })
  }

  async updateMany(dayHabits: DayHabit[]): Promise<void> {
    for (const dayHabit of dayHabits) {
      await this.update(dayHabit)
    }
  }

  async delete(dayHabit: DayHabit): Promise<void> {
    this.items = this.items.filter((item) => !item.id.equals(dayHabit.id))
  }

  async deleteMany(dayHabits: DayHabit[]): Promise<void> {
    for (const dayHabit of dayHabits) {
      await this.delete(dayHabit)
    }
  }
}
