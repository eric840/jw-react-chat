import React, {useEffect, useState} from 'react';

function DisplayConversation({conversation}) {

  return (
   	<ul>
   		{
   			conversation.map(mes=>{
   				return (
   					<li>
   						<strong>{mes.username}</strong>
   						{mes.message}
					</li>
					)
   			})
   		}
   	</ul>
    
  );
}

export default DisplayConversation;
