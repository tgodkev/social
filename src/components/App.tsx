import React, {useState} from 'react';
import { Header} from './Header';
import db from '../firebase-config';
import {  collection, addDoc, onSnapshot, DocumentData,} from 'firebase/firestore';
import { auth } from '../firebase-config';
import { useEffect } from 'react';
import { Card } from './Card';




  function App () {
    const[userMessage, setUserMessage] = useState<DocumentData[]>([{
      message : '',
      userName : ''
    }])
      
      
    const [NewMessage, setNewMessage] = useState('');
    
    

    function handleChange(event: {target: {value: React.SetStateAction<string>}}){
      let text = event.target.value;
      setNewMessage(text)

    }


    async function saveMessage( ) {

      const collectionRef = collection(db, 'messages');
      const payload = {message : NewMessage, userName : auth.currentUser?.displayName  }

      await addDoc(collectionRef, payload);
        
    }

      useEffect(() => {
        onSnapshot(collection(db, 'messages'), (snapshot) => {
        const data = snapshot.docs.map((doc) => doc.data())
          const x = data[0].message;

            console.log(x)
           setUserMessage(data);
        })
      }, [])


        function createMessage(userMessage: any){
          return(
            <Card 
            key={userMessage.id}
            message={userMessage.message}
            name={userMessage.userName}
            />
          )
        }




  return (
    <div>
      <Header />

      <div className='userinput' >
        <input type="text" placeholder= 'entermessage' onChange={handleChange} />
        <button onClick={() => saveMessage()}>Send.</button>
      </div>

      <div className='messages'>
        <h1>hello</h1>
      </div>


      <div>
        {userMessage.map(createMessage)}
      </div>
    </div>
  );
}

export default App;
