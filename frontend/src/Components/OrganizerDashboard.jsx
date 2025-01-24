import React, { useState } from 'react'
import VoteStatus from './VoteStatus'

function OrganizerDashboard() {
    const [candidates, setCandidates] = useState([{name:''}])
    const [loading, setLoading] = useState(false)

    const handleInputChange = (index,event) =>{
        const newCandidates= [...candidates];
        newCandidates[index].name = event.target.value
        setCandidates(newCandidates)
    }
    const addCandidate = ()=>{
        setCandidates([...candidates, {name:''}])
    }
    const submitCandidateList = ()=>{
        setLoading(true)
        try{
            
        }
        catch(err){
            
        }
    }
  return (
    <div>OrganizerDashboard
        <div>
            <h1>Register an event</h1>
            <h1>Enter the candidate details</h1>
            <form>
                {candidates.map((candidate,index)=>{
                    <div key={index}>
                        <label>{index+1}</label>
                        <input type='text' value={candidate.name} onChange={(e)=>handleInputChange(index,e)} placeholder='Enter the name'/>
                    </div>
                })}
                <button type='button' onClick={addCandidate}>
                    Add Candidate
                </button>
            </form>
            <button type='button' onClick={submitCandidateList} disabled={loading}> {loading? 'Submitting':'Submit'}</button>
        </div>
        <VoteStatus/>
    </div>
  )
}

export default OrganizerDashboard