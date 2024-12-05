const express = require('express')
const router = express.Router();
const User = require('../models/user');
const { jwtAuthMiddleware,generateToken } = require('../jwt');

router.post('/signup', async (req,res)=>{
    try{
     const data = req.body
     console.log("data", data)
     const newUser = new User(data);
     const savedData = await newUser.save()
     console.log('data saved successfully')
     const payload = {
        id: savedData.id,
     }
     const token = generateToken(payload)
     console.log("token", token)
     res.status(200).json({res: savedData, token: token})
    }
    catch(err){
     console.log(err)
     res.status(500).json({error: 'error'})
    }
 })
 //log in Routes
 router.post('/login',async(req,res)=>{
    try{
        //extract aadharNumber and password from request
        const {aadharNumber,password} = req.body;
        //find the user form username
        const user = await User.findOne({aadharNumber:aadharNumber})

        //if user does not exists or password mismatches, return null
        if(!user || !(await user.comparePassword(password))){
            return res.status(401).json({error:"Invalid username or password"})
        }
        
        const payload = {
            id: user.id,
        }
        const token = generateToken(payload)

        res.json({token})
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
 })

 //Profile Route
 router.get('/profile',jwtAuthMiddleware,async (req,res)=>{
    try{
        const userData = req.user
        const userId = userData.id
        const user = await User.findById(userId);

        res.status(200).json({user})
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'})
    }
 })

 //change password
 router.put('/profile/password',jwtAuthMiddleware, async (req,res)=>{
    try{
        const userId = req.user.id // userId form token
        console.log(req.body)
        const {newPassword, oldPassword} = req.body; //new password and old password from reqbody

        const user = await User.findById(userId);

        //if old password mismatches, return null
        if(!(await user.comparePassword(oldPassword))){
            return res.status(401).json({error:"Invalid password"})
        }
        //update the new password
        user.password = newPassword
        await user.save()

        console.log('password updated')
        res.status(200).json({message:'password updated'})
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: 'error'})
    }
 })

 module.exports = router