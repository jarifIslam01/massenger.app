import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';


const SendMasseges = () => {
    const [value,  setValue] = useState("");
    const {currentUser} = useAuth()

const handleSendMasseges = async(e) =>{
    e.preventDefault();


    if(value.trim()=== ""){
        alert("Enter Valid Messages")
        return
    }


    try{
 const {uid, displayName, photoURL }= currentUser;
 await addDoc(collection(db,'messages'),{
 text: value,
 name:displayName,
 avatr:photoURL,
 createdAt: serverTimestamp(),
 uid
 })
    }catch(error){
        console.log(error)
    }

   
    setValue("")
}

    return (
        <div className='bg-base-300 fixed bottom-0 w-full py-5 shadow-lg px-2'>
            <form onSubmit={handleSendMasseges} className='contenar flex '>
                <input value={value} onChange={e => setValue(e.target.value)}  className='input w-full focus:outline-none rounded-r-none' type="text" />
                <button type='submit' className='btn btn-accent  w-auto rounded-l-none'><span className='text-white'>Send</span></button>
            </form>
        </div>
        
    );
};

export default SendMasseges;