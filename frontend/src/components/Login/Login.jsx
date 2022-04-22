import { Typography,Button } from '@mui/material';
import React,{useState} from 'react';
import './Login.css'

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")
    const submitHandler = (e) =>{
        e.preventDefault();
    }
  return (
    <div className='login'>
        <div className='loginContainer'>
            <form onSubmit={submitHandler} className="loginForm">
                <Typography variant='h4'>
                    <p>A</p>
                    <p>D</p>
                    <p>M</p>
                    <p>I</p>
                    <p style={{marginRight:"1vmax"}}>N</p>

                    <p>P</p>
                    <p>A</p>
                    <p>N</p>
                    <p>E</p>
                    <p>L</p>
                </Typography>
                <div>
                    <input type="email" 
                    placeholder='Admin Email' 
                    value={email}
                    required
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    <input type="password" 
                    placeholder='Admin Password' 
                    value={password}
                    required
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                    <Button variant='contained' type='submit'>Login</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login