import { Typography } from '@mui/material'
import React from 'react'
import Message from './Message'
function Messages(props) {
    const {messages} = props;
  return (
    <>
    <Typography variant='h3'>Messages!</Typography>
    {messages && messages.map(msg => <Message key={msg.id} data={msg} />)}
    </>
  )
}

export default Messages