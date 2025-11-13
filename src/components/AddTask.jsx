import { useState } from "react"

export default function AddTask({folderId,datas,setDatas,newTask,setNewTask,newDate,setNewDate}) {

    // POUR FAIRE LES SWITCH ENTRE AFFICHER ET NE PAS AFFICHER 
    const [addingTodos,setAddingTodos] = useState(false);
    // POUR RECUPERER CE QUI EST SAISIE PAR L'UTILISATEUR 
    // const [newTask,setNewTask] = useState("");
    // Pour recuperer la date
    // const [newDate,setNewDate] = useState("");

    // FONCTION POUR AJOUTER UNE TACHES 
    const handleAddTask = () =>{
        // Pour formater la date en francais et si on entre rien alors on prend la date aujourd'hui 
        const formattedDate = newDate ? new Date(newDate).toLocaleDateString("fr-FR") : new Date().toLocaleDateString("fr-FR"); 
        const newTodo = {
            idTodo : Date.now(),
            text:newTask,
            dateTodo:formattedDate,
            completed:false
        }

        // POUR METTRE A JOURS LES DONNES 
        const newData = datas.map(folder =>{
            if(folder.idFolder != folderId ){
                return folder;
            }

            

            // else créer un nouveau dossier avec les ancienne valeur et les nouvelles 
            return{
                ...folder,
                todos:[...folder.todos,newTodo]
            }
        })

        // MET A JOURS LES DONNES ET RINITIALISE LES ANCIENNE DONNES
        setDatas(newData);
        setNewTask("")
        setNewDate("")
        setAddingTodos(false)
    }


  return (
    <div>
        {!addingTodos ?(
            <button className="m-2 text-black px-5 py-3 rounded-xl shadow-md cursor-pointer" onClick={() =>setAddingTodos(true)}>Ajout d'une taches </button>
        ):(
            <div>
                <input 
                    type="text"
                    className="border border-black"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />

                <input 
                    type="date" 
                    className="border border-black"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}  
                />

                <button onClick={handleAddTask} className="m-4 text-black px-5 py-3 rounded-xl shadow-md cursor-pointer">
                    Ajouter
                </button>
                <button onClick={() => setAddingTodos(false)} className="m-4 text-black px-5 py-3 rounded-xl shadow-md cursor-pointer">
                    Annuler
                </button>
            </div>
        )}
        
    </div>
  )
}
