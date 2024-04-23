import { fail } from '@sveltejs/kit';
// export const load = ({ cookies }) => {}

export const actions = {
    login: async ({request, cookies}) => {
        const data = await request.formData();
                const username = data.get('username')
        const password  = data.get('password')


        if (!username || !password) {
            return fail(400, {
                username,
                message: 'Missing username or password',
            })
        }
        cookies.set('username', username, { path: '/' });

        return fail(200, {
            message: 'Logged in',
        })
    },

    register: async ({request, cookies}) => {
        const data = await request.formData()
        const username = data.get('username')
        const password  = data.get('password')


        if (!username || !password) {
            return {
             message: 'Missing username or password',
            }
        }
        cookies.set('username', username, { path: '/' });

        return {
            message: 'Successfully registered!',
        }
    }


// @ts-ignore
}