import { comments } from '$lib/comments'
import { json } from '@sveltejs/kit'

export const GET = () => {
  // return new Response(JSON.stringify(comments, {
  //    headers: {
  //        'Content-Type': 'application/json'
  //    }
  // }))
  return json(comments)
}

export const POST = async ({ request }) => {
  const { text } = await request.json()
  comments.push({ id: comments.length + 1, text })
  // return new Response(JSON.stringify(comments), {
  //   statusCode: 201,
  // })
  return json(comments, {
    status: 201,
  })
}
