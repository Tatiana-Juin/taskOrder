import React from 'react'
import Folder from '../components/Folder'
import ShowTodo from '../components/ShowTodo';
import Todos from './Todos';
import { useState } from 'react';
import UpdateTask from '../components/UpdateTask';
import DeleteTask from '../components/DeleteTask';

export default function Home({datas,setDatas}) {
  // Pour modifier une tache 
    const [taskToEdit,setTaskToEdit] = useState(false);
    // POUR RECUPERER LES INFORMATION POUR SUPPRIMER UNE TACHES
    const [taskToDelete,setTaskToDelete] = useState(false);
    // POUR STOCKER LES ID DU DOSSIER LOSR DE LA MODIFICATION ET DE LA SUPPRESSION
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

        {/* CONDITION POUR LA MODIFICATION DE LA TACHE ON DOIT RECUPERER ID DE LA TACHE ET DU DOSSIER   */}
        {taskToEdit && folderIdToEdit &&(
          <UpdateTask
                        folderId={folderIdToEdit}
                        datas={datas}
                        setDatas={setDatas}
                        taskToEdit={taskToEdit}
                        setTaskToEdit={setTaskToEdit}
                        setFolderIdToEdit={setFolderIdToEdit}
                />
        )}

        {/* CONDITION POUR LA SUPPRESSION DE LA TACHE ON DOIT RECUPERER ID DE LA TACHE ET DU DOSSIER   */}
        {taskToDelete && folderIdToDelete &&(
          <DeleteTask 
                      folderId={folderIdToDelete}
                      datas={datas}
                      setDatas={setDatas}
                      taskToDelete={taskToDelete}
                      setTaskToDelete={setTaskToDelete}
                      setFolderIdToDelete={setFolderIdToDelete}
                    />
        )}

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
