const mongoose = require('mongoose')
const {Schema} = mongoose

const postSchema = new Schema({
    author: {type:mongoose.Schema.Types.ObjectId, ref:'User',require: true},
    title: {type: String, required: true},
    content: {type: String},
    postAt : {type: String}
})

const PostModel = mongoose.model('Post',postSchema)

module.exports = PostModel