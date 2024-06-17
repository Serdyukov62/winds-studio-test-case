import { useEffect, useState } from 'react'
import './App.css'

import Header from '@components/Header/Header'

import api from './api/Api';

function App() {
  const [id,setId] = useState('');
  const [rows, setRows] = useState([]);

  // useEffect(() => {
  //   api
  //   .createEntity()
  //   .then((id) => setId(id))
  // },[])

  return (
    <>
      <Header/>
    </>
  )
}

export default App
