export class Token {
  token: string

  constructor(
    token = ''
  ) {
    Object.assign(this)
    this.token = token
  }

}
