const express = require('express')
const router = express.Router();
const Candidate = require('../models/candidate');
const { jwtAuthMiddleware,generateToken } = require('../jwt');

const checkAdminRole = async (userID) =>{
    try{
        const user = await User.findById(userID)
        return user.role === 'admin';
    }catch(err){
        return false;
    }
}

// add a candidate by admin
router.post('/',jwtAuthMiddleware, async (req,res)=>{
    try{
     if(await !checkAdminRole(req.user.id))
        return res.status(403).json({message: 'user does not has admin role'})

     const data = req.body
     console.log("candidate data", data)

     //create a new candidate document using mongoose model
     const newCandidate = new Candidate(data);
     const savedData = await newCandidate.save()
     console.log('candidate data saved successfully')
     res.status(200).json({res: savedData})
    }
    catch(err){
     console.log(err)
     res.status(500).json({error: 'error saving candidate data'})
    }
 })


 // update candidate
 router.put('/:candidateId',jwtAuthMiddleware, async (req,res)=>{
    try{
        if(!checkAdminRole(req.user.id))
            return res.status(403).json({message: 'user does not has admin role'})

        const candidateId = req.params.candidateId
        const candidateDataToUpdate = req.body; //fetching new data to update for candidate
        const response = await Candidate.findByIdAndUpdate(candidateId,candidateDataToUpdate,{
            new: true, //return the updated document
            runValidators: true, //run mongoose validation
        })
        console.log('candidate data updated')
        res.status(200).json(response)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: 'error updating candidate data'})
    }
 })

 router.delete('/:candidateId',jwtAuthMiddleware, async (req,res)=>{
    try{
        if(!checkAdminRole(req.user.id))
            return res.status(403).json({message: 'user does not has admin role'})

        const candidateId = req.params.candidateId
        const response = await Candidate.findByIdAndDelete(candidateId);
        console.log('candidate removed')
        res.status(200).json(response)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: 'error deleting candidate data'})
    }
 })
 // lets start voting
 router.post('vote/:candidateId',jwtAuthMiddleware, async (req,res)=>{
    // user can vote once, no admin can vote
    candidateId = req.params.candidateId;
    userId = req.user.id;

    try{
        //find the Candidate document with candidate id
        const candidate = await Candidate.findById(candidateId);
        const user = await User.findById(userId)
        if(!candidate){
            res.status(404).json({message:"candidate not found"})
        }
        if(!user){
            res.status(404).json({message:"user not found"})
        }
        if(user.isVoted){
            res.status(400).json({message:"already voted"})
        }
        if(user.role == 'admin'){
            res.status(403).json({message:"admin not allowed"})
        }

        //Update the candidate document to update the vote
        candidate.votes.push({user: userId})
        candidate.voteCount++
        await candidate.save()
        //update the user document
        user.isVoted = true
        await user.save()

        res.status(200).json({message:"voting record updated successfully"})
    }
    catch(err){
        res.status(400).json({message:"error in voting"})
    }
 })
 //vote count
 router.get('/vote/count', async (req,res)=>{
    try{
        //find all the candidates and sort them by voteCount in descending order
        const candidate = await Candidate.find().sort({voteCount:'desc'});

        //map the candidates to only return their name and voteCount
        const voteRecord = candidate.map((data)=>{
            return {
                party: data.party,
                count: data.voteCount
            }
        })
        console.log('voting count api hit')
        return res.status(200).json(voteRecord)
    }catch(err){
        console.log(err)
        res.status(500).json({message:"error in vote count"})
    }
 })

 //List of candidates 
 
 module.exports = router