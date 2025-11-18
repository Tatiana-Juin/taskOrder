import { useEffect } from "react";
import AlertDelete from "./AlertDelete";
export default function DeleteTask({folderId,datas,setDatas,taskToDelete,setTaskToDelete}) {

// On utilise useEffect pour que ca se declence en automatique quand taskToDelete recupere todo
const handleDeleteTask = () =>{


    const newData = datas.map(folder =>{
        if(folder.idFolder !== folderId){
            return folder
        }
        // Filtre pour recuperer la tache et la supprimer 
        const updatedTodo = folder.todos.filter(todo =>{
            return todo.idTodo !== taskToDelete.idTodo
        })

        return{
            ...folder,
            todos:updatedTodo
        }
    })
    // Met a jours les valeurs dynamique 
    setDatas(newData);
    setTaskToDelete(false);

}

  return (
    <AlertDelete 
        title="Suppression d'un tache"
        message="Es-tu sur de vouloir supprimer une tache"
        onCancel={()=>setTaskToDelete(false)}
        onConfirm={handleDeleteTask}
    />
  );
}
