import React, {useEffect, useState} from 'react';

function UserList({userList, currentUser}) {

  return (
    <div className='users'>
     {
      userList.map(user=>{
        if (user.username==currentUser.username){
          return <li style={{color:'blue'}}>{user.username}</li>
        }
        return <li>{user.username}</li>
      })
     }
    </div>
    
  );
}

export default UserList;
