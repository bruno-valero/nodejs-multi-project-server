import { FastifyReply } from 'fastify'

import { Encoder } from '@/domain/core-domains/habits-tracker/application/cryptography/encoder'

export class FastifyJwtEncoder implements Encoder {
  constructor(private response: FastifyReply) {}

  encode(data: { sub: string }): Promise<string> {
    return this.response.jwtSign(data, { sign: data })
  }
}
