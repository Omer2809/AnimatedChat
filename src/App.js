import useInterval from "@use-it/interval";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdReplay } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

import "./App.css";

const messages = [
  { text: "How do I get better at React?" },
  { text: "Just build something!" },
  { text: "OK! What should I build?" },
  { text: "Iono. Just Google it?" },
  { text: "Oh! This course looks cool!" },
  { text: "Send me the link?!" },
  { text: "20ReactApps.com!" },
];

export default function App() {
  const [messageToShow, setMessageToShow] = useState(0);

  useInterval(() => setMessageToShow(messageToShow + 1), 2000);

  return (
    <div className="app">
      <div className="walkthrough">
        {messages.map((message, index) => {
          const even = index % 2 === 0;

          if (index === messageToShow + 1)
            return <TypingIndicator key={index} even={even} />;

          if (index > messageToShow) return <div key={index} />;

          return <Message key={index} message={message} />;
        })}
      </div>
      <button className="btn" onClick={()=>setMessageToShow(0)}><MdReplay /></button>
      {/* <button className="git" onClick={() => setMessageToShow(0)}><MdReplay /></button> */}
      <a href="#"><FaGithub   className="git"/></a>
    </div>
  );
}

function Message({ message }) {
  return (
    <motion.div
      className="message"
      initial={{ rotate: -5, scale: 0.2 }}
      animate={{ rotate: 0, scale: 1 }}
    >
      <div className="avatar">🐸</div>
      <div className="text">{message.text}</div>
      <div className="avatar">🐦</div>
    </motion.div>
  );
}

function TypingIndicator({ even }) {
  return (
    <motion.div
      className={`typing ${even ? "is-left" : "is-right"}`}
      initial={{ rotate: 10,scale: 0.2 }}
      animate={{ rotate: 0,scale: 1 }}
    >
      <div className="dots">
        <div />
        <div />
        <div />
      </div>
    </motion.div>
  );
}
