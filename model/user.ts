export interface IUser {
  id: number
  username: string
  expiredAt: string
  linkOnLimit?: number
  linkOffLimit?: number
  linkOnHideLimit?: number
  linkOffHideLimit?: number
  password?: string
  level: number
  createdAt: string
}