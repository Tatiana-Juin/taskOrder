import { useState } from "react";

export default function UpdateTask({folderId,datas,setDatas,taskToEdit,setTaskToEdit}) {
    // RECUPERE  LE TEXTE DE MANIERE DYNAMIQUE 
    const [updateText, setUpdateText] = useState(taskToEdit.text);
    // reformate pour input date;
    const [updateDateTodo,setUpdateDateTodo] = useState(new Date(taskToEdit.dateTodo.split("/").reverse().join("-")).toISOString().split("T")[0]) 
   
    const handleUpdateTask = ()=>{
        console.log("handleUpdateTask")
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
        <button className="m-4 text-black px-5 py-3 rounded-xl shadow-md cursor-pointer" onClick={handleUpdateTask}>
            Modifier
        </button>

        {/* BTN POUR ANNULER  */}
        <button  className="m-4 text-black px-5 py-3 rounded-xl shadow-md cursor-pointer" onClick={()=>setTaskToEdit(false) }>
            Annuler
        </button>

        

    </div>
  )
}
