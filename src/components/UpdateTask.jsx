import { useState } from "react";


export default function UpdateTask({folderId,datas,setDatas,taskToEdit,setTaskToEdit}) {
    // RECUPERE  LE TEXTE DE MANIERE DYNAMIQUE 
    const [updateText, setUpdateText] = useState(taskToEdit.text);
    // reformate pour input date;
    const [updateDateTodo,setUpdateDateTodo] = useState(new Date(taskToEdit.dateTodo.split("/").reverse().join("-")).toISOString().split("T")[0]) 

    
   
    // FONCTION POUR MODIFIER UNE TACHE 
    const handleUpdateTask = (idFolder,idTask)=>{
        // Reformer la date en version anglais
        const reformattedDate = updateDateTodo.split("-").reverse().join("/");

        // datas recupere les dossier et verifie si on les meme id si c'est pas le cas il retourne folder les dossier 
        const newData =datas.map(folder=>{
            if(folder.idFolder !== idFolder ){
                return folder;
            }

            // SI C'EST LE BON DOSSIER ON MAP SUR TODOS
            const updatedTodos = folder.todos.map(todo =>{
                // si la tache n'est pas la bonne on retourne todo 
                if(todo.idTodo !== idTask){
                    return todo
                }

                // return un nouveau tableau avec les ancienne et nouvelle valeur 
                return{
                    ...todo,
                    text:updateText,
                    dateTodo:reformattedDate
                }
            })

            // retourne toute les nouvelles valeur 
            return{
                ...folder,
                todos:updatedTodos

            }
        })

        setDatas(newData)
        // Initialise taskToEdit pour qu'il disparaisse 
        setTaskToEdit(false)
        
    }


  return (
    <div>
        {/* INPUT POUR LE TEXTE  */}
        <input 
            type="text"
            className="border border-black"
            value={updateText}
            onChange={ (e) => setUpdateText(e.target.value) }
            
        />
        {/* INPUT POUR LA DATE  */}
        <input 
            type="date" 
            className="border border-black"
            value={updateDateTodo}
            onChange={ (e) => setUpdateDateTodo(e.target.value) }
              
        />
        {/* BTN POUR MODIFIER LES CHAMPS DE SAISIE   */}
        <button className="m-4 text-black px-5 py-3 rounded-xl shadow-md cursor-pointer" onClick={() =>handleUpdateTask(folderId,taskToEdit.idTodo)}>
            Modifier
        </button>

        {/* BTN POUR ANNULER  */}
        <button  className="m-4 text-black px-5 py-3 rounded-xl shadow-md cursor-pointer" onClick={()=>setTaskToEdit(false) }>
            Annuler
        </button>



    </div>
  )
}
