import user from './../../modules/user.js' //

class User {
    constructor() {
        this.baseUrl = '/user'
    }
    async index(ctx, next) {
        ctx.body = 'index'
        next && next()
    }
    // all user 
    async userList(ctx, next) {
        try {
            const users = await user.find({}, '-age')
            console.log(users)
            if (!users) {
                ctx.throw(404)
            }

            ctx.body = {
                users
            }
        } catch (err) {
            if (err === 404 || err.name === 'CastError') {
                ctx.throw(404)
            }

            ctx.throw(500)
        }

        if (next) { return next() }
    }
    async checkUser(ctx) {
        let { username } = ctx.query
        try {
            const res = await user.find({ username })
            console.log(res.length)
            if (!res.length) {
                // throw new Error('未找到当前用户')
                ctx.body = {
                    status: 0,
                    message: 'fail',
                    data: null
                }
            } else {
                ctx.body = {
                    status: 1,
                    message: 'success',
                    data: res
                }
            }
        } catch (err) {
            err === 404 ? ctx.throw(404) : ctx.throw(500)
        }
    }
    // 增加user
    async addUser(ctx) {
        console.log(ctx.request.body)
        let { username, age } = ctx.request.body

        if (!username) {
            ctx.body = {
                status: 0,
                message: '请填写名字',
            }
        }
        if (!age) {
            ctx.body = {
                status: 0,
                message: '请填写年龄',
            }
        }
        const newUser = new user({ username, age })
        try {
            await newUser.save()
            console.log('添加成功')
            ctx.body = {
                status: 1,
                message: 'success'
            }
        } catch(err) {
            err === 404 ? ctx.throw(404) : ctx.throw(500)
        }

    }
}
export default new User()