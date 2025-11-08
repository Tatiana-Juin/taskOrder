import Folder from "../components/Folder"
import { useParams } from 'react-router-dom'
import { useState } from "react";
import data from "../data/data";
export default function Todos({datas,setDatas}) {
 

  const {folderId} = useParams();
  const selectedFolder = datas.find(folder => folder.idFolder === folderId);

  return (
    <div>
        {/* PERMET D'AFFICHER LES DOSSIER  */}
        <Folder datas={datas} setDatas={setDatas} />
        <h2 className="text-center"> Dossier  </h2>
        {selectedFolder ? (
          selectedFolder.todos.map((todo) =>(
           <div key={todo.idTodo}>
              <p>{todo.text}</p>
           </div>
          ))
        ):(
          <p>Dossier non trouver</p>
        )}

    </div>
  )
}
