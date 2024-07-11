import { User } from '@/domain/core-domains/habits-tracker/enterprise/entities/user'

export class UserPresenter {
  basic(user: User) {
    const presenter = {
      email: user.email,
    }

    return presenter
  }
}
