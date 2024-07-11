import { app } from './app'
import { env } from './env'

app
  .listen({
    port: env.PORT,
    host: env.HOST,
  })
  .then(() => console.log(`server running on port ${env.PORT}`))