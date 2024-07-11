import { DayHabitsRepository } from '@/domain/core-domains/habits-tracker/application/repositories/day-habits-repository'
import { DaysRepository } from '@/domain/core-domains/habits-tracker/application/repositories/days-respository'
import { Day } from '@/domain/core-domains/habits-tracker/enterprise/entities/day'

export class InMemoryDaysRepository implements DaysRepository {
  constructor(private dayHabitsRepository: DayHabitsRepository) {}

  items: Day[] = []

  async create(day: Day): Promise<void> {
    await this.dayHabitsRepository.createMany(day.dayHabits.getNewItems())

    this.items.push(day)
  }

  async findById(id: string): Promise<Day | null> {
    return this.items.find((item) => item.id.value === id) ?? null
  }

  async findByDateAndUserId(date: Date, userId: string): Promise<Day | null> {
    return (
      this.items.find(
        (item) =>
          item.userId.value === userId &&
          item.date.toISOString() === date.toISOString(),
      ) ?? null
    )
  }

  async findManyByUserId(userId: string): Promise<Day[]> {
    return this.items.filter((item) => item.userId.value === userId)
  }

  async update(day: Day): Promise<void> {
    await this.dayHabitsRepository.deleteMany(day.dayHabits.getRemovedItems())
    await this.dayHabitsRepository.createMany(day.dayHabits.getNewItems())

    this.items = this.items.map((item) => {
      if (item.id.equals(day.id)) {
        return day
      }
      return item
    })
  }

  async updateMany(Days: Day[]): Promise<void> {
    for (const Day of Days) {
      await this.update(Day)
    }
  }

  async delete(day: Day): Promise<void> {
    await this.dayHabitsRepository.deleteMany(day.dayHabits.getItems())

    this.items = this.items.filter((item) => !item.id.equals(day.id))
  }

  async deleteMany(Days: Day[]): Promise<void> {
    for (const Day of Days) {
      await this.delete(Day)
    }
  }
}
