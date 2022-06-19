const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL_CONNECT,
    {
        useNewUrlParser:true,
        useUnifiedTopology: true
    }
    ,()=>console.log('MongoDB Connection - Success'))

// https://cloud.mongodb.com/v2/62a91df60735bb6277ab2b44#clusters