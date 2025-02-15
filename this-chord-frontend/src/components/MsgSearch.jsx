import React from 'react'
import { useState } from 'react'
import msgsService from '../services/msgs'

const MsgSearch = ({ msgs }) => {
  const [search, setSearch] = useState("")

  let filteredMsgs = msgs.filter(msg => msg.content.toLowerCase().includes(search.toLowerCase()));

  if (filteredMsgs.length === 0) {
    filteredMsgs = [{ user: "", id: 0, content: "no matches found" }];
  }

  return (
    <>
      <input type="text" placeholder="Search for a message" value={search} onChange={(e) => setSearch(e.target.value)} />
    </>
  )
}

export default MsgSearch
