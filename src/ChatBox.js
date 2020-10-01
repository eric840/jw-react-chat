import React, {useEffect, useState} from 'react';

function ChatBox({handleSubmit,handleInput,input}) {

  return (
    <form onSubmit={handleSubmit}>
     <input type='text' placeholder="Message here..." onChange={handleInput} value={input} /> 
    </form>
    
  );
}

export default ChatBox;
