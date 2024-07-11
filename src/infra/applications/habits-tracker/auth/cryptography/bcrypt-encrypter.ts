import { compare, hash } from 'bcryptjs'

import { Encrypter } from '@/domain/core-domains/habits-tracker/application/cryptography/encrypter'

export class BcryptEncrypter implements Encrypter {
  hash(plainText: string): Promise<string> {
    return hash(plainText, 8)
  }

  compare(plainText: string, hash: string): Promise<boolean> {
    return compare(plainText, hash)
  }
}
