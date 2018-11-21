import mongoose from 'mongoose'

const Product = new mongoose.Schema({
    name: String,
    price: Number,
    number: Number,
    id: Number,
    create_time: { type: Date, default: Date.now },
})

Product.index({id: 1});


export default mongoose.model('product', Product); //user 单数，默认链接的collection为复数的users