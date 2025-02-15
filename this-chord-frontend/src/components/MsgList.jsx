import React from 'react';

const MsgList = ({ msgs }) => {
  const reversedMsgs = [...msgs].reverse(); // Create a copy and reverse it

  return (
    <>
      {reversedMsgs.map((msg) => (
        <div key={msg.id}>
          <p>[{msg.user.username}]$ {msg.content}</p>
        </div>
      ))}
    </>
  );
};

export default MsgList;
