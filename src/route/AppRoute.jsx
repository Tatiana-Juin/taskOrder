import{Routes,Route} from 'react-router-dom'
import Folder from '../components/Folder'
import Todos from '../pages/Todos'
import { useState } from 'react'
import data from '../data/data'
export default function AppRoute() {

  const [datas, setDatas] = useState(data);

  return (
    <>
        <Routes>
            <Route path="/" element={<Folder  datas={datas} setDatas={setDatas}  />} />

            {/* ROUTE DYNAMIQUE  */}
            <Route path="folder/:folderId" element={<Todos datas={datas} setDatas={setDatas} />} />
        </Routes>
    </>
  )
}
