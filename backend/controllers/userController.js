const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')
const {generateToken} = require('../utils/generateToken')
const authUser= asyncHandler(async(req,res)=>{
    const {email,password} =req.body
    const user = await User.findOne({email})

    if(user&&(await user.matchPassword(password))){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:generateToken(user._id)
        })
    }else{
        res.status(401)
        throw new Error('Invalid email/password')
    }
    
})



const getUserProfile= asyncHandler(async(req,res)=>{
   
   const user = await User.findById(req.user._id)

   if(user){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
        })
   }else{
    res.status(404)
    throw new Error ('User not found')
   }
    
})
module.exports = {authUser,getUserProfile}