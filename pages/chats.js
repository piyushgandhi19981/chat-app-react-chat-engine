import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";
import dynamic from 'next/dynamic';
import { useThisContext } from "../context";

const ChatEngine = dynamic(
  () => import("react-chat-engine").then((module) => module.ChatEngine)
);

const MessageFromSocial = dynamic(() => import("react-chat-engine").then((module) => module.MessageFromSocial));

export default function Chats() {
  const [showChat, setShowChat] = useState(false);
  const { username, secret } = useThisContext();
  const router = useRouter();

  useEffect(() => {
    if(typeof document !== null){
      setShowChat(true);
    }
  }, []);

  useEffect(() => {
    if(username.length === 0 || secret.length === 0){
      router.push("/");
    }
  });

  if(!showChat) return <div />;

  return (
  <div className="background">
    <div className="shadow">
      <ChatEngine renderNewMessageForm={() => <MessageFromSocial />} height="calc(100vh - 200px)" projectID="19661f1d-ec78-42ef-9ee5-5cae8b431fe9" userName={username} userSecret={secret} />
    </div>
  </div>
  );
}
