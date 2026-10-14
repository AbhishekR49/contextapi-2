import React, { useEffect, useState } from 'react'
import { getUser, getUserbyId } from '../services/userService';

const ApiPractice = () => {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(()=>{
       async function fetchUser(){
        try{
            setLoading(true);
            setError(null);

            const data = await getUser();
            setUser(data);
           
            
        }catch(error){
            setError(error.message);
        }finally{
            setLoading(false);
        }
       }
       fetchUser();
    },[]);  


    if(loading){
        return <h1>Loading.....</h1>
    }
    
    if (error) {
    return (
    <div>
      <p>Failed to load users: {error}</p>
    </div>
  );
}
    if(user.length === 0){
        return <p>No user found</p>
    }

  return (
    <div>
        <h1>Users:</h1>

        {user.map((use) =>(
            <div key={use.id}>
                <h1>{use.name}</h1>
                <h1>{use.email}</h1>
            </div>
        ))}
      
    </div>
  )
}

export default ApiPractice
