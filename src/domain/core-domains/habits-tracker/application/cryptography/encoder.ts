export interface Encoder {
  encode(data: { sub: string }): Promise<string>
}
