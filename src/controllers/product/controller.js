import Base from './../../prototype/base.js'
import Product from './../../models/product.js'

class ProductController extends Base {
    constructor(args) {
        super(args)
        this.baseUrl = '/product'
    }
    /**
     * @api {post} /product create a product
     *
     * @apiName createProduct
     * @apiGroup Products
     *
     * @apiExample Example usage:
     * curl -H "Content-Type: application/json" -X POST -d '{ "product": { "name": "car", "price": "100",number:'200' } }' localhost:8000/users
     *
     *
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "products": [{
     *          "_id": "56bd1da600a526986cf65c80"
     *          "name": "book"
     *          "price": "100",
     *          "number":""
     *       }]
     *     }
     */
    async createProduct(ctx, next) {
        console.log(ctx.request.body)
        const {
            name,
            price,
            number
        } = ctx.request.body

        if (!name) {
            ctx.body = {
                status: 0,
                message: '名称必填'
            }
            return
        }

        if (!price) {
            ctx.body = {
                status: 0,
                message: '价格必填'
            }
            return
        }

        if (!number) {
            ctx.body = {
                status: 0,
                message: '数量必填'
            }
            return
        }
        const product = new Product({ name, price, number })

        try {
            await product.save()
        } catch (err) {
            ctx.throw(422, err.message)
        }

        ctx.body = {
            product,
            status: 1
        }
    }
    /**
     * @api {get} /product get all products
     *
     * @apiName getProducts
     * @apiGroup Products
     *
     * @apiExample Example usage:
     * curl -H "Content-Type: application/json" -X GET localhost:8000/product
     *
     *
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "products": [{
     *          "_id": "56bd1da600a526986cf65c80"
     *          "name": "book"
     *          "price": "100"
     *       }]
     *     }
     */
    async getPrducts(ctx, next) {
        try {
            const products = await Product.find({})
            ctx.body = {
                status: 1,
                products
            }
        } catch (err) {
            ctx.throw(404)
        }
    }
    /**
     * @api {get} /product/:id  get product by id
     *
     * @apiName getProduct
     * @apiGroup Products
     *
     * @apiExample Example usage:
     * curl -H "Content-Type: application/json" -X GET localhost:8000/product/2322qwe231
     *
     *
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "product": {
     *          "_id": "56bd1da600a526986cf65c80"
     *          "name": "book"
     *          "price": "100"
     *       }
     *     }
     */
    async getProduct(ctx, next) {
        try {
            const { id } = ctx.params
            const product = await Product.findById({ _id:id })
            if (!product) {
                ctx.throw(404)
            }
            ctx.body = {
                product
            }
        } catch (err) {
            console.log(err)
            if (err === 404 || err.name === 'CastError') {
                ctx.throw(404)
            }

            ctx.throw(500)
        }

        if (next) return next()
    }
    /**
     * @api {put} /product/:id update a product by id
     * @apiName updateProduct
     * @apiGroup Products
     * @apiExample useage
     * curl -H "Content-Type: application/json" -X PUT -d '{ "product": { "price": "500" } }' localhost:8000/product/56bd1da600a526986cf65c80
     */
    async updateProduct(ctx,next) {
        const { product } = ctx.body;
        const {
            name,
            price,
            number
        } = ctx.request.body

        Object.assign(product, { name, price, number })

        await product.save()

        ctx.body = {
            product,
            status: 1
        }
    }

    /**
     * @api {delete} /product/:id delete a product by id
     * @apiName updateProduct
     * @apiGroup Products
     * @apiExample useage
     * curl -H "Content-Type: application/json" -X DELETE  localhost:8000/product/56bd1da600a526986cf65c80
     */
    async deleteProduct(ctx,next) {
        const { product } = ctx.body;
        try {
            await product.remove()

            ctx.body = {
                status: 1,
                message: '删除成功'
            }
        } catch (err) {
            console.log(err)
            ctx.throw(404)
        }

    }
}

export default new ProductController()