const mongoose = require('mongoose')

const schema = mongoose.Schema({
    postname :mongoose.Types.ObjectId  ,
    comment: [{
        type: String
    }]

})

module.exports=mongoose.model('Comment',schema)