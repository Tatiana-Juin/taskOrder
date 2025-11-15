import { useEffect } from "react";

export default function DeleteTask({folderId,datas,setDatas,taskToDelete,setTaskToDelete}) {

// On utilise useEffect pour que ca se declence en automatique quand taskToDelete recupere todo
useEffect(()=>{

    if (!taskToDelete) return;

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


},[taskToDelete])
 
    
   
  return null;
}
