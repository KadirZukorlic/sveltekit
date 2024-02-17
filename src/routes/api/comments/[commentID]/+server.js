import { comments } from '$lib/comments'
import { json } from '@sveltejs/kit'

export const GET = async ({ params }) => {
  const { commentID } = params
  const comment = comments.find((comment) => comment.id === parseInt(commentID))

  return json(comment)
}

export const PATCH = async ({ params, request }) => {
  const { commentID } = params
  const { text } = await request.json()

  const updatedComment = comments.find(
    (comment) => comment.id === parseInt(commentID),
  )
  updatedComment.text = text

  return json(updatedComment)
}

export const DELETE = async ({ params }) => {
  const { commentID } = params
  const deletedComment = comments.find(
    (comment) => comment.id === parseInt(commentID),
  )
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(commentID),
  )

  comments.splice(index, 1)

  return json(deletedComment)
}
