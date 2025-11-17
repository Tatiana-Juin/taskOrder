import { useEffect } from "react";

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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-[300px]">

        <h2 className="text-lg font-bold mb-4">Supprimer la tâche</h2>
        <p className="mb-6">Voulez-vous vraiment supprimer cette tâche ?</p>

        <div className="flex justify-end gap-3">
          <button 
            className="px-4 py-2 bg-gray-300 rounded-xl cursor-pointer"
            onClick={() => setTaskToDelete(false)}
          >
            Annuler
          </button>

          <button 
            className="px-4 py-2 bg-red-500 text-white rounded-xl cursor-pointer"
            onClick={handleDeleteTask}
          >
            Oui, supprimer
          </button>
        </div>
      </div>
    </div>
  );
}
