import React from 'react'

function Message(props) {
    const {id, createAt, username, text} = props.data;
  return (
    <>
        <h2>{username}</h2>
        <p>{text}</p>
    </>
  )
}

export default Message