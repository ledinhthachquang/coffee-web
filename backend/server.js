const express= require('express')
const {notFound,errorHandler} = require('./middleware/errorMiddleware')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes')
const app =express()
var cors = require('cors')
dotenv.config();
app.use(cors());
connectDB();
app.use(express.json())

app.get('/',(req,res)=>{
 res.send('không có cái api nào ở đây hết')
})
app.use('/api/products',productRoutes)
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT||5000
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}...`)
})
