const mongoose = require("mongoose")

const dotenv = require('dotenv');
dotenv.config();


mongoose.connect(

    // config.DB_URL,{useNewUrlParser:true})
    
        process.env.DB_URL,
        {useNewUrlParser:true,useUnifiedTopology: true},
    //     err =>{
    //         if(err){
    //             throw err.message;
    //         }
    //         else{
    //             console.log("databse connection successfully !");
    //         }
    //     }
     )

    module.exports = mongoose;