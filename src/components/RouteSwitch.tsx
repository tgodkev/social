import React , {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App';
import { Profile } from './Profile';
import db from '../firebase-config';
import {  collection, addDoc, onSnapshot, DocumentData, serverTimestamp, orderBy, Timestamp, limit, query, getFirestore, where} from 'firebase/firestore';
import { auth } from '../firebase-config';
import useId from '@mui/material/utils/useId';


interface RouteProps {

    ProfileInfo: string,
    
    
    }


function RouteSwitch <RouteProps>(){

    const [ProfileInfo, setProfileInfo] = useState<DocumentData[]>([{
        message : 'thje',
        userName : '',
        photo: '',

    }]);

   
    

    useEffect(() => {
        const recentMessagesQuery = query(collection(getFirestore(), 'messages'),orderBy('timestamp', 'desc'), limit(12));
  
        onSnapshot(recentMessagesQuery, (snapshot) => {
        const data = snapshot.docs.map((doc) => doc.data())


        const user = auth.currentUser?.displayName;

        function checkMesage(ProfileInfo) {
            if(ProfileInfo.userName === user ){
                return(
                    ProfileInfo
                )
            }

        }

          
          console.log(data)
           setProfileInfo(data);
       
           //fireout how to store timestamp in usermassage state.
        })
      }, [])

      
     


    return(
        <BrowserRouter>
            <Routes>
                <Route path ='/' element={<App />} />
                <Route path = '/profile' element={ <Profile />} />
            </Routes>
        </BrowserRouter>

    )

}

export default RouteSwitch;