import React, { useState } from 'react'
import {Box, TextField, Button} from '@mui/material'

function Login(props) {
    const {setUser} = props;
    const [currUsername, setCurrUsername] = useState();

  return (
    <>
        <Box>
            <TextField value={currUsername} onChange={(e) => setCurrUsername(e.target.value)}></TextField>
            <Button variant="contained" onClick={() => setUser(currUsername)}>Submit</Button>
        </Box>
    </>
  )
}

export default Login