import { FastifyRequest } from 'fastify'

export async function jwtVerify(req: FastifyRequest) {
  await req.jwtVerify()
}
