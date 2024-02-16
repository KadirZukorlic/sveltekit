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
