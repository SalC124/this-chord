import React from 'react';

const MsgList = ({ msgs }) => {
  const reversedMsgs = [...msgs].reverse(); // Create a copy and reverse it

  return (
    <>
      {msgs.map((msg, index) => {
        msg.index = index;

        /*
        const prevUsername = index > 0 ? msgs[index - 1].user.username : "No previous message";
        const nextUsername = index < msgs.length - 1 ? msgs[index + 1].user.username : "No next message";
        */

        const usernameBar = index > 0 && (msgs[index - 1].user.id === msg.user.id)
          ? null
          : (<li className='begin-msg-block'>[{msg.user.username}]</li>);
        const endMsgBar = index < msgs.length - 1 && (msgs[index + 1].user.id === msg.user.id)
          ? null
          : "end-msg-block";


        return (
          <div key={msg.id}>
            {usernameBar}<li className={endMsgBar}>{msg.content}</li>
          </div>
        )
      })}
    </>
  );
};

export default MsgList;
