import Folder from "../components/Folder"
import { useParams } from 'react-router-dom'
import AddTask from "../components/AddTask";
import { useState } from "react";

export default function Todos({datas,setDatas}) {
 

  const {folderId} = useParams();
  const selectedFolder = datas.find(folder => folder.idFolder === folderId);
  // Pour recuperer la tache 
   const [newTask,setNewTask] = useState("");
    // Pour recuperer la date
    const [newDate,setNewDate] = useState("")

  return (
    <div>
        {/* PERMET D'AFFICHER LES DOSSIER  */}
        <Folder datas={datas} setDatas={setDatas} />

        {/* POUR AFFICHER LE TITRE DU DOSSIER S'IL EXISTE */}
        <h2 className="text-center text-lg">  {selectedFolder ? selectedFolder.nameFolder : 'introuvale'}  </h2>

        {/* BOUTON POUR AJOUTER UNE TACHE  */}
        <AddTask folderId={folderId} datas={datas} setDatas={setDatas} newTask={newTask} setNewTask={setNewTask} newDate={newDate} setNewDate={setNewDate}  />
        
        {/* POUR AFFICHER LES TACHE D'UN DOSSIER  */}
        {selectedFolder ? (
          selectedFolder.todos.map((todo) =>(

           <div key={todo.idTodo} className="flex items-center justify-between  border border-gray-200 rounded-xl p-4 my-3  ">
              {/* affiche les elements */}
              <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-5 h-5 cursor-pointer accent-green-500"/>
                  <p className="text-gray-800 text-lg">{todo.text}</p>
                  <p className="text-gray-800 text-lg" >{todo.dateTodo}</p>
              </div>
              
              <div className="flex gap-3">
                  <button className="text-black px-5 py-2 rounded-xl shadow-md cursor-pointer bg-blue-100 hover:bg-blue-200 transition-all duration-150">Modifier</button>
                  <button  className="text-black px-5 py-2 rounded-xl shadow-md cursor-pointer bg-red-100 hover:bg-red-200 transition-all duration-150">Supprimer</button>
              </div>

              
           </div>
          ))
        ):(
          <p className="text-center text-red-500 mt-4">Dossier non trouver</p>
        )}

    </div>
  )
}
