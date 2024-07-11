import z from 'zod'

import Entity from '@/core/entities/entity'
import UniqueEntityId from '@/core/entities/unique-entity-id'

interface UserProps {
  email: string
  password?: string | null
  createdAt: Date
  updatedAt: Date | null
}

export const userCreationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).optional().nullable(),
  createdAt: z.date().nullable().optional(),
  updatedAt: z.date().optional(),
})

export type UserCreationProps = z.infer<typeof userCreationSchema>

export class User extends Entity<UserProps> {
  static create(props: UserCreationProps, id?: string) {
    const user = new User(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
        updatedAt: props.updatedAt ?? null,
      },
      new UniqueEntityId(id),
    )

    return user
  }

  get email() {
    return this.props.email
  }

  get password() {
    return this.props.password
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }
}
