import { Button, Typography } from '@mui/material';
import React, {useEffect, useState} from 'react'
import Messages from './Messages';
import TextBox from './TextBox';
import axios from 'axios'



function Chat(props) {
    const {user, logout} = props;
    const [messages, setMessages] = useState();

    useEffect(() => {
        async function getMessages(){
            const response = await fetch('/chat/messages');
            const body = await response.json();
            setMessages(body);
            console.log('body', body);
        }
        getMessages();
    }, [])
  return (
    <>
        <Typography variant='h1'>Messaging App</Typography>
        <Messages messages={messages}/>
        <TextBox user={user}/>
        <Button onClick={logout}>Log Out</Button>
    </>
  )
}

export default Chat