import { Typography } from '@mui/material'
import React from 'react'
import "./AdminPanel.css"

const AdminPanel = () => {
  return (
    <div className="adminPanel">
        <div className="adminPanelContainer">
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
                <form onSubmit={submitHandler}>
                    <input type="name" 
                    placeholder='Name'
                    onChange={(e)=>setName(e.target.value)}
                    />
                    <input type="email" 
                    placeholder='Email' 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    <input type="password" 
                    placeholder='Password' 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                    <div className="adminPanelSkill">

                    </div>
                </form>
        </div>
    </div>
  )
}

export default AdminPanel