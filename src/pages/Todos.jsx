import Folder from "../components/Folder"
import { useParams } from 'react-router-dom'
import AddTask from "../components/AddTask";
import UpdateTask from "../components/UpdateTask";
import { useEffect } from "react";
import { useState } from "react";
import DeleteTask from "../components/DeleteTask";
import UpdateFolder from "../components/UpdateFolder";
import DeleteFolder from "../components/DeleteFolder";
import ShowTodo from "../components/ShowTodo";

export default function Todos({datas,setDatas}) {
 
  const {folderId} = useParams();
  // Pour recuperer id du dossier 
  const selectedFolder = datas.find(folder => folder.idFolder === folderId);
  // Pour recuperer la tache 
   const [newTask,setNewTask] = useState("");
    // Pour recuperer la date
    const [newDate,setNewDate] = useState("")

    const [taskToEdit,setTaskToEdit] = useState(false);

    // POUR RECUPERER LES INFORMATION POUR SUPPRIMER UNE TACHES
    const [taskToDelete,setTaskToDelete] = useState(false);

    // POUR FAIRE LE SWITCH POUR L'UPDATE DU DOSSIER 
    const [folderToEdit,setFolderToEdit] = useState(false);

    // POUR SWITCHER POUR LE DELETE DU DOSSIER 
    const [folderToDelete,setFolderToDelete] = useState(false)

    // Pour fermer l'update quand on change de dossier 
    useEffect(() => {
      setTaskToEdit(false);
    }, [folderId]);

  return ( 
    <div>
        {/* PERMET D'AFFICHER LES DOSSIER  */}
        <Folder datas={datas} setDatas={setDatas} setTaskToEdit={setTaskToEdit} />

        {/* POUR AFFICHER LE TITRE DU DOSSIER S'IL EXISTE */}
        <div className="flex justify-center ">
            <h2 className="text-center text-lg">  {selectedFolder ? selectedFolder.nameFolder : 'introuvale'}  </h2>

             <button className="text-black px-5 py-2 rounded-xl  border-gray-300 shadow-md  cursor-pointer bg-blue-100 hover:bg-blue-200  transition-all duration-150 mx-4" onClick={()=>setFolderToEdit(selectedFolder)}>Modifier</button>

              <button  className="text-black px-5 py-2 rounded-xl shadow-md cursor-pointer bg-red-100 hover:bg-red-200 transition-all duration-150" onClick={()=>setFolderToDelete(selectedFolder)}>Supprimer</button>
        </div>
        
      
       
        {/* POUR LA MODIFICATION  */}
        {folderToEdit && (
          <UpdateFolder
            folderId={folderId}
            datas={datas}
            setDatas={setDatas}
            folderToEdit={folderToEdit}
            setFolderToEdit={setFolderToEdit}
          />
        )}

        {/* POUR SUPPRIMER UN DOSSIER  */}
        {folderToDelete&&(
          <DeleteFolder 
            folderId={folderId}
            datas={datas}
            setDatas={setDatas}
            folderToDelete={folderToDelete}
            setFolderToDelete={setFolderToDelete}
          />
        )}
        
         {/* BOUTON POUR AJOUTER UNE TACHE  */}
        <AddTask folderId={folderId} datas={datas} setDatas={setDatas} newTask={newTask} setNewTask={setNewTask} newDate={newDate} setNewDate={setNewDate}  />

        

        {/* POUR APPELLER LE COMPOSANT POUR LA MODIFICATION */}
        {taskToEdit &&(
          <UpdateTask
              folderId={folderId}
              datas={datas}
              setDatas={setDatas}
              taskToEdit={taskToEdit}
              setTaskToEdit={setTaskToEdit}
          />
        )}

        {taskToDelete &&(
          <DeleteTask 
            folderId={folderId}
            datas={datas}
            setDatas={setDatas}
            taskToDelete={taskToDelete}
            setTaskToDelete={setTaskToDelete}
          />
        )}


        
        {/* POUR AFFICHER LES TACHE D'UN DOSSIER  */}
        {selectedFolder ? (
          selectedFolder.todos.map((todo) =>(

          
          <div key={todo.idTodo} className="flex items-center justify-between  border border-gray-200 rounded-xl p-4 my-3  ">
          <ShowTodo
              todo={todo}
              setTaskToEdit={setTaskToEdit}
              setTaskToDelete={setTaskToDelete}
          />  

          </div>
          ))
        ):(
          <p className="text-center text-red-500 mt-4">Dossier non trouver</p>
        )}

    </div>
  )
}
