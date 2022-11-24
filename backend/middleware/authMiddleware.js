const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async (req, res, next) =>{
    let token
    //token will have the word 'Bearer' before the token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){ 
      try {
        
        //get token from the header, split with space will change the line to array , now bearer is in  0 index
        //and token is in 1 index, be selecting the 1, we can accsess token
        token = req.headers.authorization.split(' ')[1]

        //verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        //get user from the token
        req.user= await User.findById(decoded.id).select('-password') //to avoid the password here

        next()

      } catch (error) {
        console.log(error)
        res.status(401)// 401 error means not authorized
        throw new Error('Not authorized')
        
      }

    }

    if(!token){ 
        res.status(401)
        throw new Error('Not authorized, no token')
    }

})

module.exports = {protect}