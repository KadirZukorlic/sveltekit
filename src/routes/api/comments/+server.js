import {comments} from '$lib/comments'
import {json} from "@sveltejs/kit";

export const GET = () => {
    // return new Response(JSON.stringify(comments, {
    //    headers: {
    //        'Content-Type': 'application/json'
    //    }
    // }))

    return json(comments)
}