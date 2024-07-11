import { UsersRepository } from '@/domain/core-domains/habits-tracker/application/repositories/users-reposiory'
import { User } from '@/domain/core-domains/habits-tracker/enterprise/entities/user'

export class InMemoryUsersRepository implements UsersRepository {
  items: User[] = []

  async create(user: User): Promise<void> {
    this.items.push(user)
  }

  async findById(id: string): Promise<User | null> {
    return this.items.find((item) => item.id.value === id) ?? null
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.items.find((item) => item.email === email) ?? null
  }

  async update(user: User): Promise<void> {
    this.items = this.items.map((item) => {
      if (item.id.equals(user.id)) {
        return user
      }
      return item
    })
  }

  async delete(user: User): Promise<void> {
    this.items = this.items.filter((item) => item.id.equals(user.id))
  }
}
