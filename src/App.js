import React, {useEffect, useState} from 'react';
import Socket from './utils/socket'
import UserList from './UserList'
import ChatBox from './ChatBox'
import DisplayConversation from './DisplayConversation'

function App() {
  const [currentUser, setCurrentUser ] = useState({})
  const [userList, setUserList ] = useState([])
  const [conversation, setConversation ] = useState([])
  const [input, setInput ] = useState('')


  useEffect(() => {
    Socket.emit('NEW_USER')

    Socket.on('GET_CURRENT_USER', user => {
      // think about what to do here
      setCurrentUser(user)
    })

    Socket.on('UPDATE_USER_LIST', users => {
      // think about what to do here
      setUserList(users)
    })
    Socket.on('RECEIVE_BROADCAST', data => {
      console.log(data)
      setConversation((prev)=>{
        console.log(prev)
        return [
          ...prev,
          data
        ]
      })
      // think about what to do here
    })
  }, [])

  const handleInput = (e) => {
    setInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    let data = {
      username: currentUser.username,
      message: input,
      timestamp: Date.now()
    }
    Socket.emit('BROADCAST_MESSAGE', data)
    setInput("")
  }

  return (
    <div>
      <UserList currentUser={currentUser} userList={userList} />
      <ChatBox input={input} handleInput={handleInput} handleSubmit={handleSubmit} />
      <DisplayConversation conversation={conversation}/>
    </div>

  );
}

export default App;
