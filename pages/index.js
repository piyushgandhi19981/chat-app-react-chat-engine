import React from "react";
import { useThisContext } from "../context";

import { useRouter } from 'next/router';

import axios from 'axios';

export default function Auth() {

  const router = useRouter();

  const { setUsername, setSecret, username, secret } = useThisContext();

  function onSubmit(e){
    e.preventDefault();
    if(username.length === 0 || secret.length === 0) return;
    axios.put('https://api.chatengine.io/users/', {
      username, secret
    }, {
      headers: {
        "Private-key": '17ada05f-ccb1-4e87-8929-6eae6516f77a'
      }
    }).then((r) => {
      router.push("/chats");
    })
  }

  return (
    <div className="background">
      <div className="auth-container" >
        <form className="auth-form" onSubmit={onSubmit}  >
          <div className="auth-title" >NextJS Chat</div>
          <div className="input-container" >
            <input placeholder="Email" className="text-input" onChange={e => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" className="text-input" onChange={e => setSecret(e.target.value)} />
          </div>
          <button type="submit" className="submit-button" >Login / Sign Up</button>
        </form>
      </div>
    </div>
  );
}
