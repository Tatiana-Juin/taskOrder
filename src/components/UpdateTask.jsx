import { useState } from "react";


export default function UpdateTask({folderId,datas,setDatas,taskToEdit,setTaskToEdit,setFolderIdToEdit}) {
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
        
        // quand j'appelle ce composant UpdateTask et qu'il manque un props cela ne plante pas systematiquement le code ca met le code en undefinted mais c peut faire crasher le code c'est pour ca qu'on doit mettre la ligne ci-dessous 
        setFolderIdToEdit && setFolderIdToEdit(null);
        
    }


  return (
  <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        
        {/* La boite de dialogue */}
        <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md transform transition-all scale-100 border border-white/20">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Modifier la tâche</h3>
            
            <div className="space-y-5">
                <div>
                     {/* INPUT POUR MODIFIER LE CHAMPS TEXT */}
                     <label className="text-xs font-bold text-slate-500 uppercase tracking-wide ml-1 mb-1 block">Titre</label>
                    
                    <input 
                        type="text"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium text-slate-700"
                        value={updateText}
                        onChange={ (e) => setUpdateText(e.target.value) }
                    />
                </div>

                <div>
                    {/* INPUT POUR MODIFIER LA DATE  */}
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide ml-1 mb-1 block">Date</label>
                    <input 
                        type="date" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 text-slate-700 font-medium"
                        value={updateDateTodo}
                        onChange={ (e) => setUpdateDateTodo(e.target.value) }
                    />
                </div>
            </div>
            {/* BOUTON POUR MODIFIER EL CHAMPS DE SAISIE OU ANULER */}
            <div className="flex gap-3 mt-8">
                <button  className="flex-1 px-5 py-3 rounded-xl bg-slate-100 text-slate-600 font-bold hover:bg-slate-200 transition-colors" onClick={()=>setTaskToEdit(false) }>
                    Annuler
                </button>
                <button className="flex-1 bg-indigo-600 text-white px-5 py-3 rounded-xl shadow-lg hover:bg-indigo-700 hover:shadow-indigo-500/30 font-bold transition-all" onClick={() =>handleUpdateTask(folderId,taskToEdit.idTodo)}>
                    Enregistrer
                </button>
            </div>
        </div>
    </div>
  )
}
