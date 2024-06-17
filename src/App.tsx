import { useEffect, useState } from 'react'

import styles from './index.module.css'

import {TopBar} from '@/components/TopBar';
import {ItemBar} from '@/components/ItemBar';
import {Header} from '@/components/Header'
import {Table} from '@/components/Table';


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
    <main className={styles.main}>
      <Header/>
      <TopBar/>
      <div className={styles.container}>
      <ItemBar/>
      <Table />
      </div>
    </main>
  )
}

export default App
