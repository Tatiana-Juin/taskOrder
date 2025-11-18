import React from 'react'
import Folder from '../components/Folder'
import { data } from 'react-router-dom'

export default function Home({datas,setDatas}) {
  return (
    <div>
        <Folder 
            datas={datas}
            setDatas={setDatas}
        />
    </div>
  )
}
