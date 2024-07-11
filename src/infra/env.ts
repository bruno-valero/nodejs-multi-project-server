import { config } from 'dotenv'
import { z } from 'zod'

config()

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  NODE_ENV: z.enum(['dev', 'prod', 'test']).default('prod'),
  HOST: z.string().default('0.0.0.0'),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success && _env.error) {
  throw new Error(
    `envirinment variables validation error: ${JSON.stringify(_env.error.format(), null, 2)}`,
  )
}

export const env = _env.data
