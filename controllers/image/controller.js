// import user from './../../modules/user.js' 
import Canvas from './../../prototype/Canvas.js'

class Image extends Canvas {
    constructor(args) {
        super(args)
        this.baseUrl = '/image'

        this.index = this.index.bind(this)

    }
    async index(ctx, next) {
        console.log(this)
        let sizeAry = ctx.params.size && ctx.params.size.includes('x') ? ctx.params.size.split('x') : [ctx.params.size, ctx.params.size];
        let shape = ctx.params.shape ? ctx.params.shape : 'rectangle'; //'rectangle||circle'
        let bgColor = ctx.params.bg ? `${ctx.params.bg}` : `#e83632`;

        let imgBuffer = this.getCanvas({ width: Number(sizeAry[0]), height: Number(sizeAry[1]), shape, bgColor })
        ctx.status = 200
        let flag = shape === 'circle' ? '50%' : '0'
        ctx.body = imgBuffer
        next && next()
    }

}

export default new Image()