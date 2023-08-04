import React from 'react'
import "./Chats.css";
import Chat from '../Chat/Chat';

function Chats() {
  return (
    <div className='chats'>
        <Chat
            name="Florence"
            message="Hey! How are you?"
            timestamp="35 minutes ago"
            profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWzKjbGr-ccWc4BDiW160OYkE2is3tC4i9ag&usqp=CAU"
        />
        <Chat
            name="Jennifer"
            message="Whats up?"
            timestamp="55 minutes ago"
            profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoOAFbaDIR-AZwUSp_YNBxrq-XZ0IlkioJVA&usqp=CAU"
        />
        <Chat
            name="Margot"
            message="Hello!"
            timestamp="3 days ago"
            profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTboe6BhE3wTUEQj_0n0hVztMcylgyhpwtlg&usqp=CAU"
        />
        <Chat
            name="Natalie"
            message="Hey, Natalie here."
            timestamp="1 week ago"
            profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS59NzD0HF5YADI4pGJyqLU2FXzK7Ek-cULag&usqp=CAU"
        />
    </div>
  )
}

export default Chats