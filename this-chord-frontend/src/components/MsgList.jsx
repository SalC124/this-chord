import React from 'react';

const MsgList = ({ msgs }) => {
  const reversedMsgs = [...msgs].reverse(); // Create a copy and reverse it
  // turns seconds into milliseconds
  const gapTime = 150 * 1000

  return (
    <>
      {msgs.map((msg, index) => {
        msg.index = index;

        const usernameBar = ((index > 0) && ((msgs[index - 1].user.id === msg.user.id) && (msgs[index - 1].time + gapTime > msgs[index].time)))
          ? null
          : (<li className='begin-msg-block'>[{msg.user.username}]</li>);

        const endMsgBar = ((index < msgs.length - 1) && (msgs[index + 1].user.id === msg.user.id) && (msgs[index].time + gapTime > msgs[index + 1].time))
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
