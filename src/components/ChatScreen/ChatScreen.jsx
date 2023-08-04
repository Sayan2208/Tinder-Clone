import React, { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@mui/material/Avatar";
import { useParams } from "react-router-dom";

function ChatScreen() {
  const [input, setInput] = useState("");
  const { person } = useParams();
  const [messages, setMessages] = useState([
    {
      name: "Jennifer",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoOAFbaDIR-AZwUSp_YNBxrq-XZ0IlkioJVA&usqp=CAU",
      message: "Whats up?"
    },
    {
      name: "Jennifer",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoOAFbaDIR-AZwUSp_YNBxrq-XZ0IlkioJVA&usqp=CAU",
      message: "How is it going?"
    },
    {
      name: "Florence",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWzKjbGr-ccWc4BDiW160OYkE2is3tC4i9ag&usqp=CAU",
      message: "Hey! How are you?"
    },
    {
      name: "Margot",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTboe6BhE3wTUEQj_0n0hVztMcylgyhpwtlg&usqp=CAU",
      message: "Hello!"
    },
    {
      name: "Margot",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTboe6BhE3wTUEQj_0n0hVztMcylgyhpwtlg&usqp=CAU",
      message: "How have you been?"
    },
    {
      name: "Natalie",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS59NzD0HF5YADI4pGJyqLU2FXzK7Ek-cULag&usqp=CAU",
      message: "Hey, Natalie here."
    }
  ]);
  const [myMessages, setMyMessages] = useState([
      {
        msg: `Hi! How are you, ${person}?`
      }
  ])
  const handleSend = (event) => {
    event.preventDefault();

    setMyMessages((prevValue) => {
      return [...prevValue, { msg: input }];
    });
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH {person.toUpperCase()} ON 10/08/20
      </p>
      {messages.map((message) => {
        if (message.name === person) {
          return (
            <div className="chatScreen__message">
              <Avatar
                className="chatScreen__image"
                alt={message.name}
                src={message.image}
              />
              <p className="chatScreen__text">{message.message}</p>
            </div>
          );
        } else {
          return <span></span>;
        }
      })}
      <div className="chatScreen__message">
        <div className="chatScreen__userTexts">
          {myMessages.map((message)=>{
          return (<p className="chatScreen__textUser">
            {message.msg} </p>)
          })}
        </div> 
      </div>

      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          type="text"
          className="chatScreen__inputField"
          placeholder="Type a message..."
        />
        <button
          type="submit"
          onClick={handleSend}
          className="chatScreen__inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
