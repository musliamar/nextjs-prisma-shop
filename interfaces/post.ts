import type Author from './author'

type PostType = {
  id: number
  createdAt: Date
  updatesAt: Date
  title: string
  content: string
  published: boolean
  viewCount: number
  authorId: number
}

export default PostType
