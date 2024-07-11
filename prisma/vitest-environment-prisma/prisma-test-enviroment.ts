import 'dotenv/config'

import { execSync } from 'node:child_process'
import { randomUUID } from 'node:crypto'

import { PrismaClient } from '@prisma/client'
import { Environment } from 'vitest'

const prisma = new PrismaClient()

export default <Environment>{
  name: 'prisma',
  transformMode: 'web',
  async setup() {
    if (!process.env.DATABASE_URL)
      throw new Error('provide a DATABASE_URL environment variable.')

    const schema = randomUUID()

    const url = new URL(process.env.DATABASE_URL)
    url.searchParams.set('schema', schema)
    const DATABASE_URL = url.toString()

    process.env.DATABASE_URL = DATABASE_URL

    execSync('npx prisma migrate deploy')

    return {
      async teardown() {
        await prisma.$executeRawUnsafe(
          `DROP SCHEMA IF EXISTS "${schema}" CASCADE`,
        )
        await prisma.$disconnect()
      },
    }
  },
}
