import React from 'react'
import { useLayoutEffect } from 'react';
import { useState } from 'react'

const AddMsg = ({ handleSubmit }) => {
  const [newMsg, setNewMsg] = useState('');


  const [textInputWidth, setTextInputWidth] = useState(0);
  useLayoutEffect(() => {
    function updateSize() {
      const input = document.getElementById('text-input');
      const inputMargin =
        parseInt(window.getComputedStyle(input).marginLeft) +
        parseInt(window.getComputedStyle(input).marginRight);
      const buttonWidth = document.getElementById('submit-button').offsetWidth;
      setTextInputWidth(window.innerWidth - buttonWidth - (4 * inputMargin));
    }

    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div>
      <form
        onSubmit={(e) => handleSubmit(e, newMsg, setNewMsg)}
      >
        <input
          id="text-input"
          className='inputs'
          type="text"
          placeholder="Enter Message"
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          style={{ width: textInputWidth, }}
        />
        <button
          id="submit-button"
          className='inputs'
          type="submit"
        ><i className="fa-solid fa-paper-plane"></i></button>
      </form>
    </div>
  );
};

export default AddMsg
