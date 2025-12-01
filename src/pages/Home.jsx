import React from 'react'
import Folder from '../components/Folder'
import ShowTodo from '../components/ShowTodo';
import Todos from './Todos';
import { useState } from 'react';
// import { data } from 'react-router-dom'

export default function Home({datas,setDatas}) {
  // Pour modifier une tache 
    const [taskToEdit,setTaskToEdit] = useState(false);

    // POUR RECUPERER LES INFORMATION POUR SUPPRIMER UNE TACHES
    const [taskToDelete,setTaskToDelete] = useState(false);
    // USE STATE QUI VONT M'AIDER POUR METTRE A JOUR LES ETAT
    const [folderIdToEdit, setFolderIdToEdit] = useState(null);
    const [folderIdToDelete, setFolderIdToDelete] = useState(null);
    
    // Pour mettre a jour la tache et le dossier 
    const handleEditClick = (task, folderId) => {
      setTaskToEdit(task);     // Met à jour l'état 1 (la tâche)
      setFolderIdToEdit(folderId); // Met à jour l'état 2 (le dossier parent)
    };

    // POUR SUPPRIMER UNE TACHE ET METTRE A JOUR LE DOSSIER 
    const handleDeleteClick = (task, folderId) => {
      setTaskToDelete(task);
      setFolderIdToDelete(folderId);
    };
  
  return (

    
    
    <div>
        <Folder 
            datas={datas}
            setDatas={setDatas}
        />

        <div className='flex justify-center'>
            <h2 className='text-center text-lg'>Toutes les tâches</h2>
        </div>

       {datas.map((folder) =>(
        <React.Fragment key={folder.idFolder}>
          <p  className='text-center font-bold'> {folder.nameFolder}  </p>
          {folder.todos.map( (todo) =>(
         

          <div key={todo.idTodo} className="flex items-center justify-between  border border-gray-200 rounded-xl p-4 my-3  ">
            
            <ShowTodo
                  todo={todo}
                  setTaskToEdit={(task)=>handleEditClick(task,folder.idFolder)}
                  setTaskToDelete={(task )=> handleDeleteClick(task,folder.idFolder) }
              /> 
            </div>
          ) )}
          </React.Fragment>
       ))}
       {/* <Todos datas={datas} setDatas={setDatas} /> */}
    </div>
    
  )
}
