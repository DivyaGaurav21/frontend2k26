import React, { useEffect, useState } from "react";

import "./day11.css";

let CHAT_MESSAGES_LIMIT = 5;

let nameList = [
  "Time",
  "Past",
  "Future",
  "Dev",
  "Fly",
  "Flying",
  "Soar",
  "Soaring",
  "Power",
  "Falling",
  "Fall",
  "Jump",
  "Cliff",
  "Mountain",
  "Rend",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Gold",
  "Demon",
  "Demonic",
];

function generateRandomNames() {
  var finalName = nameList[Math.floor(Math.random() * nameList.length)];
  return finalName;
}

const YoutubeStream = () => {
  const [messages, setMessages] = useState([]);

  const fetchData = () => {
    // Make API call and get Data

    const data = [
      {
        name: generateRandomNames(),
        photo:
          "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        message:
          "This is a live streaming chat video in Namaste Frontend System Design series.",
      },
    ];

    setMessages((messages) => {
      let newMessageList = [...data, ...messages];
      newMessageList = newMessageList.splice(0, CHAT_MESSAGES_LIMIT);
      return newMessageList;
    });
  };

  useEffect(() => {
    const s = setInterval(fetchData, 1000);

    return () => {
      clearInterval(s);
    };
  }, []);

  return (
    <div className="container">
      <div className="video">
        <iframe
          width={830}
          height={465}
          src="https://www.youtube.com/embed/4xDzrJKXOOY?si=GC4yRwBjKDaji8Jm"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className="stream">
        {messages.map((message) => (
          <div className="chat">
            <img className="pp" alt={message.name} src={message.photo}></img>
            <p>
              <span className="bold">{message.name} - </span>
              <span>{message.message}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YoutubeStream;
