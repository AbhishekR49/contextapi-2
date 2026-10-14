import React, { useState } from 'react'
import Input from '../components2/Input'
import Button from '../components2/Button';

const users = [
    { id: 1, name: "Abhishek", role: "admin" },
    { id: 2, name: "Rahul", role: "user" },
    { id: 3, name: "Aman", role: "user" },
    { id: 4, name: "Priya", role: "admin" },
    { id: 5, name: "Rohit", role: "user" },
];

function UserList(){
   const [search, setSearch] = useState("");
   const [page, setPage] = useState(1);

   const usersPerPage = 2;
   const startIndex = (page -1) * usersPerPage;

   const filteredUsers = users.filter( user => 
    user.name.toLowerCase().includes(search.toLowerCase())
   );

   const paginatedUser = filteredUsers.slice(startIndex, startIndex + usersPerPage);
   const totalPages = Math.ceil(filteredUsers.length / usersPerPage);


   return(
    <>
        <Input value={search} onChange={(e )=> {setSearch(e.target.value); setPage(1); }} placeholder="Search user..." />

        { paginatedUser.length === 0 ? (<p>User not found..</p>) :(
          paginatedUser.map((user)=>(
            <div key={user.id}>
              
              <h1>{user.name}</h1>
              <h4>{user.role}</h4>
              <br />

            </div>
            
           
          )))
        }
        <div className=' flex gap-9 '>
          <Button disabled={page === 1} onClick={()=> setPage(page -1)} >Previous</Button>
        <Button disabled={page === totalPages} onClick={()=> setPage(page+1)} >Next</Button>
        </div>
        <h1>{page}out of {totalPages}</h1>
    </>
   );
}


export default UserList
