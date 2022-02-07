import React, {useState} from 'react';
import { Header} from './Header';
import db from '../firebase-config';
import {  collection, addDoc, onSnapshot, DocumentData, serverTimestamp, orderBy, Timestamp, limit, query, getFirestore} from 'firebase/firestore';
import { auth } from '../firebase-config';
import { useEffect } from 'react';
import { Fancy } from './Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';





  function App () {
    const[userMessage, setUserMessage] = useState<DocumentData[]>([{
      message : '',
      userName : '',
      photo: '',
    }])
      
      
    const [NewMessage, setNewMessage] = useState('');
    
    

    function handleChange(event: {target: {value: React.SetStateAction<string>}}){
      let text = event.target.value;
      setNewMessage(text)

    }

    

    async function saveMessage( ) {

      const collectionRef = collection(db, 'messages');
      const payload = {message : NewMessage, userName : auth.currentUser?.displayName, photo: auth.currentUser?.photoURL, timestamp: serverTimestamp() }
  
      await addDoc(collectionRef, payload);
        
    }




      useEffect(() => {
        const recentMessagesQuery = query(collection(getFirestore(), 'messages'), orderBy('timestamp', 'desc'), limit(12));
  
        
        onSnapshot(recentMessagesQuery, (snapshot) => {
        const data = snapshot.docs.map((doc) => doc.data())

          
          //console.log(data)
           setUserMessage(data);
           //fireout how to store timestamp in usermassage state.
        })
      }, [])


        function createMessage(userMessage: any){
          return(
            <Fancy 
            key={userMessage.id}
            message={userMessage.message}
            name={userMessage.userName}
            photo={userMessage.photo}
            />
          )
        }




  return (
    <div>
      <Header />

      <div className='userinput' >
      <TextField id="standard-basic" label="Enter Message." variant="standard" className="textfield" onChange={handleChange}/>
      <Button variant="outlined" onClick={() => saveMessage()}>Send Message</Button>
      </div> 


      <div >
        {userMessage.map(createMessage)}
      </div>
    </div>
  );
}

export default App;
