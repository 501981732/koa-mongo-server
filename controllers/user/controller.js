import user from './../../modules/user.js'

class User {
    constructor() {
    	this.baseUrl = 'user'
    }
    async userList(ctx, next) {
        try {
            // const user = await user.findById(ctx.params.id)
            const user = await '王猛'
            if (!user) {
                ctx.throw(404)
            }

            ctx.body = {
                user
            }
        } catch (err) {
            if (err === 404 || err.name === 'CastError') {
                ctx.throw(404)
            }

            ctx.throw(500)
        }

        if (next) { return next() }
    }
}
export default User