import React, { useEffect, useState } from 'react'

function VoteStatus() {
    const [candidates, setCandidates] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        const fetchVotes = async () =>{
            try{
                const response = await fetch('api')
                if(!response.ok){
                    throw new Error('failed to fetching voting data')
                }
                const data = await response.json()
                setCandidates(data.candidates)
            }
            catch(err){
                console.log("Error in fetching voting data")
            }
            finally{
                setLoading(false)
            }
        }
        fetchVotes()
    },[])
    if(loading){
        return <p>Loading ...</p>
    }
    
  return (
    <div>VoteStatus
        <table>
            <thead>
                <tr>
                    <th>Candidate Name</th>
                    <th>Votes</th>
                </tr>
            </thead>
            <tbody>
                {candidates.map((candidate,index)=>{
                    <tr key={index}>
                        <td>{candidate.name}</td>
                        <td>{candidate.vote}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>

  )
}

export default VoteStatus