const mongoose = require('mongoose')
const {Schema}=mongoose
const slug = require('slug')

const projetoSchema = new Schema({
    title: {
        type: String,
        required:true
    },
    slug:{
        type: String,
        required:true,
        unique:true,
        default:function(){return slug(this.title)}
    },
    description: {
        type: String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('projeto',projetoSchema)