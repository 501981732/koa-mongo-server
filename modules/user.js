import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const User = new Schema({
	username: String,
	password: String,
	id: Number,
	create_time: String,
	admin: {type: String, default: '管理员'},
	status: Number,  //1:普通管理、 2:超级管理员
})

User.index({id: 1});


export default mongoose.model('User', User);