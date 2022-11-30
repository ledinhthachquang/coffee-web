const express = require('express');
const path = require('path')
const mongoose=require('mongoose')
const User = require('./model/user')
const bcrypt = require('bcryptjs')
const jwt =require('jsonwebtoken')
const JWT_SECRET = 'adasda22e84@23@ERIJEjajedjajda/sdsaddad'
mongoose.connect('mongodb://127.0.0.1:27017/reg-form-db',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
})
const bodyParser = require('body-parser')
const app = express();




app.use('/', express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());

app.get('/register.html/', (req, res) => {
    // REDIRECT goes here
    res.redirect('http://localhost:5000/register.html')
  })
  app.get('/login.html/', (req, res) => {
    // REDIRECT goes here
    res.redirect('http://localhost:5000/login.html')
  })
app.post('/api/login', async(req,res)=>{
    const {username,password} =req.body;
    const user =await User.findOne({username}).lean()
    if(!user){
        return res.json({status:'error',error:'Invalid username/password'});
    }
    if(await bcrypt.compare(password,user.password)){
        const token = jwt.sign({id:user._id,username:user.username},JWT_SECRET)
        return res.json({status:'ok',data:token})
    }
    res.json({status:'error',error:'Invalid username/password'});
    
} )
app.post('/api/register', async (req,res)=>{

   
   const {name,email,username,password:plainTextPassword} = req.body;
   if(!username ||typeof username !=='string'){
        return res.json({status:'error',error:'Invalid username',field:'username'});
   }
   if(!plainTextPassword || typeof plainTextPassword !== 'string'){
    return res.json({status:'error',error:'Invalid password',field:'password'});
   }
    const password=await bcrypt.hash(plainTextPassword,12);
    try{
        const response = await User.create({
            name,
            email,
            username,
            password
        }
        )
        console.log('User created successfully',response)
    }
    catch(error){
    
        if(error.code === 11000)return res.json({status:'error',error:'Username is used',field:'username'});
       throw error;
    }
    res.json({status:'ok'})
})


app.listen(5000,()=>{
    console.log('Listening on port 5000');
})