const mongoose = require('mongoose')
const {Schema} = mongoose

const commentSchema = new Schema({
    author: {type:mongoose.Schema.Types.ObjectId, ref:'User'},
    commentAt : {type:mongoose.Schema.Types.ObjectId, ref: 'Post'},
    title: {type: String, required: true},
    body: {type: String},
    postAt:{type:String}
})

const CommentModel = mongoose.model('Comment',commentSchema) 

module.exports = CommentModel