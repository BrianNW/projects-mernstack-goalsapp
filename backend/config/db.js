const mongoose = require('mongoose')

// set up try catch async function
const connectDB = async () => {
    try {
        
        //contain await connection 
        const conn = await mongoose.connect(process.env.MONGO_URI)

        // if successful
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);

    }catch(error) {
        console.log(error);
        // close the process and pass the failure as 1
        process.exit(1)
    }
}

module.exports = connectDB