import React, { useState } from 'react'
import Chat from './Chat'
import Login from './Login'

function ChatApp() {
    const [user, setUser] = useState();
  return (
    <>
        {user?<Chat user={user} logout={() => setUser("")}/>:<Login setUser={setUser}/>}
    </>
  )
}

export default ChatApp