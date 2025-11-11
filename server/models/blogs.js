const mongoose= require('mongoose')

const PostSchema=mongoose.Schema({
    tech:String,
    heading:String,
    detail:String,
    image:String
})
module.exports=mongoose.model('blogs',PostSchema)
