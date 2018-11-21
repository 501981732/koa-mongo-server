import productController from './controller.js'

export const baseUrl = productController.baseUrl

// REST API 面向资源
export default [{
    /**
     * 获取所有商品
     */
    method: 'GET',
    route: '/',
    handlers: [
        productController.getPrducts
    ]
}, {
    /**
     * 创建商品信息
     */
    method: 'POST',
    route: '/',
    handlers: [
        productController.createProduct
    ]
}, {
    /**
     * 获取某个商品信息
     */
    method: 'GET',
    route: '/:id',
    handlers: [
        productController.getProduct
    ]
}, {
    /**
     * 更新某个商品
     */
    method: 'PUT',
    route: '/:id',
    handlers: [
        productController.getProduct,
        productController.updateProduct
    ]
}, {
    /**
     * 删除某个商品
     */
    method: 'DELETE',
    route: '/:id',
    handlers: [
        productController.getProduct,
        productController.deleteProduct
    ]
}]