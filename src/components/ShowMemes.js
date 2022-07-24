import React, { useEffect, useState } from 'react'
import { useCollection } from '../hooks/useCollection'

import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';



export default function ShowMemes() {

 const { document } =  useCollection('Memes')
 
 const addToDatabase = () => {
   addDoc(collection(db, 'Memes'), {
    Description: 'lorem',
    age: 25,
    name: 'lorem'
   })
 }

  return (
    <div className='container p-8'>

      <button className='py-4 px-9 bg-red-300' onClick={addToDatabase}>Click Me</button>
      
    </div>
  )
}
