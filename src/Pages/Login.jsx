import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';
import Input from '../components2/Input';
import Button from '../components2/Button';

const Login = () => {

    const {login, validate} = useAuth();
    const navigate = useNavigate();
    const[email, setEmail] = useState("")
    const [password, setPassword] =useState("");
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);



    async function handleLogin(e){
       e.preventDefault();

       const validationErrors = validate(email,password);
       setErrors(validationErrors);

       if(Object.keys(validationErrors).length >0){
         return;
       }

       try{
         setLoading(true);

          await login({
            email,
            password
          });
          navigate('/dashboard', {replace:true});

       }catch(error){
        setErrors({
         api: error.message
        });
       }

       finally{
         setLoading(false);
       }
    }
  return (
    <div>
        
          <form onSubmit={handleLogin} action="">
             <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
             />
             <br />
             {
               errors.email && ( <p className='text-red-600'>{errors.email}</p> )
             }
             <br />
             <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
             />
             <br />
              {
               errors.password && ( <p className='text-red-600'>{errors.password}</p> )
             }
             <br />
             {
               errors.api && (<p className='text-red-600' >{errors.api}</p>)
             }
             <br />
             <Button type="submit" disabled={loading} variant="primary">{loading?"Logging in...":"Login"}</Button>
          </form>      

    </div>
  )
}

export default Login
