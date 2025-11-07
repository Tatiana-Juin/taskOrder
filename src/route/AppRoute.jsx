import{Routes,Route} from 'react-router-dom'
import Folder from '../components/Folder'
import Todos from '../components/Todos'

export default function AppRoute() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Folder />} />

            {/* ROUTE DYNAMIQUE  */}
            <Route path="folder/:folderId" element={<Todos />} />
        </Routes>
    </>
  )
}
