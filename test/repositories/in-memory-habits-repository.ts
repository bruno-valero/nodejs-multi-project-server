import { HabitsRepository } from '@/domain/core-domains/habits-tracker/application/repositories/habits-reposiory'
import { Habit } from '@/domain/core-domains/habits-tracker/enterprise/entities/habit'

export class InMemoryHabitsRepository implements HabitsRepository {
  items: Habit[] = []

  async create(habit: Habit): Promise<void> {
    this.items.push(habit)
  }

  async createMany(habits: Habit[]): Promise<void> {
    for (const habit of habits) {
      await this.create(habit)
    }
  }

  async findById(id: string): Promise<Habit | null> {
    return this.items.find((item) => item.id.value === id) ?? null
  }

  async update(habit: Habit): Promise<void> {
    this.items = this.items.map((item) => {
      if (item.id.equals(habit.id)) {
        return habit
      }
      return item
    })
  }

  async updateMany(habits: Habit[]): Promise<void> {
    for (const habit of habits) {
      await this.update(habit)
    }
  }

  async delete(habit: Habit): Promise<void> {
    this.items = this.items.filter((item) => !item.id.equals(habit.id))
  }

  async deleteMany(habits: Habit[]): Promise<void> {
    for (const habit of habits) {
      await this.delete(habit)
    }
  }
}
