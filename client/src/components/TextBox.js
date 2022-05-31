import { TextField, Button } from '@mui/material';
import axios from 'axios';
import React, {useState} from 'react'

function TextBox(props) {
  const {user} = props;
  const [currText, setCurrText] = useState("");

  const submitMessage = async () => {
    const time = Date.now()/1000;
    const obj = {username: user, text: currText, createdAt: time}
    console.log(obj)
    let response = await axios.post('/message', obj);
  }

  return (
    <>
      <TextField value={currText} onChange={(e) => setCurrText(e.target.value)} />
      <Button onClick={submitMessage}>Submit</Button>
    </>
  )
}

export default TextBox