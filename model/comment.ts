import { ILink } from './link'
import { IUser } from './user'

export interface IComment {
  id: number
  postId: string
  userUid?: string
  username?: string
  message?: string
  createdAt?: Date
  phoneNumber?: string
  cmtId: string
  linkId: number
  link: ILink
  user: IUser
}
