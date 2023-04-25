const mongoose = require('mongoose')
const {Schema} = mongoose

const postSchema = new Schema({
    author: {type:mongoose.Schema.Types.ObjectId, ref:'User',require: true},
    title: {type: String, required: true},
    content: {type: String},
    postAt : {type: Date},
    parentId: {type:mongoose.ObjectId, required: false},
    rootId : {type:mongoose.ObjectId, required: false}
})

const PostModel = mongoose.model('Post',postSchema)

module.exports = PostModel