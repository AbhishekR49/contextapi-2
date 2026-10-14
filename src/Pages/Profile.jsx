import React, { useEffect, useState } from 'react'
import { getProfile } from '../services/authService';

const Profile = () => {

  const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(()=>{

      async function fecthProfile() {

        try{
          const data = await getProfile();
          setProfile(data.user);

        }catch(error){
          setError(error.message);
        }finally{
          setLoading(false);
        }
      }

      fecthProfile();

    },[])

    if(loading){
      return <p>Loading profile...</p>
    }
    if(error){
      return <p>{error}</p>
    }

  return (
     <div>
            <h1 className="text-3xl font-bold mb-6">
                Profile
            </h1>

            <p>Name: {profile.name}</p>
            <p>Email: {profile.email}</p>
            <p>Role: {profile.role}</p>
        </div>
   
  );
}

export default Profile
