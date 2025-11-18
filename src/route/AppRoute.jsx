import{Routes,Route} from 'react-router-dom'
import Folder from '../components/Folder'
import Todos from '../pages/Todos'
import { useState } from 'react'
import data from '../data/data'
import Home from '../pages/Home'
export default function AppRoute() {

  // POUR QUE LES DONNES SOIT DYNAMIQUE 
  const [datas, setDatas] = useState(data);

  return (
    <>
        <Routes>
          {/* chemlin principale  */}
            <Route path="/" element={<Home  datas={datas} setDatas={setDatas}  />} />

            {/* ROUTE DYNAMIQUE  */}
            <Route path="folder/:folderId" element={<Todos datas={datas} setDatas={setDatas} />} />
        </Routes>
    </>
  )
}
