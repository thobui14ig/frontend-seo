import { IUser } from "./user"

export enum ELink {
  LINK_OFF = 'linkOff',
  LINK_ON = 'linkOn',
  LINK_ON_HIDE = 'linkOnHide',
  LINK_OFF_HIDE = 'linkOffHide',
}

export enum LinkStatus {
  Pending = 'pending',
  Started = 'started',
}

export type Type = 'die' | 'undefined' | 'public' | 'private'
export interface ILink {
  id?: number
  userId: number
  linkName: string
  linkUrl: string
  postId: string | null
  lastCommentTime: Date | null
  delayTime: number
  like: number
  status: LinkStatus
  type: Type
  process?: boolean
  createdAt?: Date
  user: IUser
  content: string
}
