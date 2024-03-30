// export const load = ({ cookies }) => {}

export const actions = {
    default: async ({request, cookies}) => {
        const data = request.formData()
        const username = data.get('username')
        const password  = data.get('password')


        if (!username || !password) {
            return {
             message: 'Missing username or password',
            }
        }
        cookies.set('username', username, { path: '/' });

        return {
            message: 'Logged in',
        }
    }
// @ts-ignore
}