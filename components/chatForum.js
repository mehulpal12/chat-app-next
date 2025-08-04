"use client"
import { useState, useEffect } from 'react';
import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/v2/index.css';

const apiKey = 'tsqa7cfk2cdc';
const userId = 'user_300QKAn2ZJFUiznUvYNvKu4nRUl';
const userName = 'mehul';
const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidXNlcl8zMDBRS0FuMlpKRlVpem5VdllOdkt1NG5SVWwiLCJleHAiOjE3NTMxOTk0NDJ9.u_RFtXQbf_PZm2agjZ9rUO1tzmJKNq2sBlfRTnjLJiA';

const user = {
  id: userId,
  name: userName,
  image: `https://getstream.io/random_png/?name=${userName}`,
};

// console.log( "this is toke " +userToken)
export default function ChatForum  ({slug}) {
  function toTittleCase (str){
    return str.replace(
      /\b[a-z]/g,
      (char)=> char.toUpperCase()
    )
  }
  const [channel, setChannel] = useState();
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(() => {
    if (!client) return;

    const channel = client.channel('messaging', slug, {
      image: 'https://getstream.io/random_png/?name=react',
      name: toTittleCase(slug.replace(/-/g," ")+" Discussion"),
      members: [userId],
    });

    setChannel(channel);
  }, [client]);

  if (!client) return <div>Setting up client & connection...</div>;

  return (
    <Chat client={client}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};
