import { useEffect, useRef, useState } from "react";
import Message from "./Message";
import { collection, query, onSnapshot, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase";

const ChatBox = () => {
  const messegesEndRef = useRef();

  const [messages, setMessages] = useState([]);

const scrollToBotton = ()=>{
  messegesEndRef.current.scrollIntoView({ behavior: "smooth" });

}
useEffect(scrollToBotton, [messages])
  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      
      );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const newMessages = [];
      querySnapshot.forEach((doc) => {
        newMessages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(newMessages);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
    <div className="pb-44 pt-20 contenar">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
    <div ref={messegesEndRef}></div>
    </>
  );
};

export default ChatBox;