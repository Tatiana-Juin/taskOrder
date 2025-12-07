import { useState } from "react"

export default function AddTask({folderId,datas,setDatas,newTask,setNewTask,newDate,setNewDate}) {

    // POUR FAIRE LES SWITCH ENTRE AFFICHER ET NE PAS AFFICHER 
    const [addingTodos,setAddingTodos] = useState(false);
    // POUR AFFICHER LE MESSAGE ERREUR 
    const [errorMessage,setErrorMessage] = useState("");
    

    // FONCTION POUR AJOUTER UNE TACHES 
    const handleAddTask = () =>{

        // SI LE CHAMPS EST VIDE 
         if(newTask.trim()==""){
           setErrorMessage("Erreur tu doit saisir du texte pour ajouter une taches")
            return;
        }

        setErrorMessage("");
        // Pour formater la date en francais et si on entre rien alors on prend la date aujourd'hui 
        const formattedDate = newDate ? new Date(newDate).toLocaleDateString("fr-FR") : new Date().toLocaleDateString("fr-FR"); 

        // JE COMPARE LA DATE SAISIE ET LA DATE ACTUELLE POUR EMPECHER DE SAISIR UNE DATE INFERIEUR A CELLE ACTUELLE 
        if( new Date(newDate) <  new Date() ){
            setErrorMessage("La date ne peut pas etre inferieur a celle d'aujourd'hui ")
            return;
        }

        setErrorMessage("");

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
    <div className="w-full max-w-2xl mx-auto my-6 px-4">
        {!addingTodos ?(
            <button 
                className="w-full bg-white border-2 border-dashed border-indigo-200 text-indigo-500 hover:text-indigo-600 hover:border-indigo-400 hover:bg-indigo-50 px-5 py-4 rounded-2xl cursor-pointer transition-all duration-200 font-bold text-lg shadow-sm" 
                onClick={() =>setAddingTodos(true)}
            >
                + Ajouter une tâche
            </button>
        ):(
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 animate-in zoom-in-95 duration-200">
                <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Nouvelle tâche</h3>
                
                <div className="flex flex-col gap-4">
                    {/* POUR LE CHAMPS TEXT */}
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-slate-500 ml-1">Titre de la tâche</label>
                        <input 
                            type="text"
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-slate-400"
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                            placeholder="Ex: Acheter du pain..."
                        />
                    </div>

                    {/* POUR LE CHAMPS DATE  */}
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-slate-500 ml-1">Date d'échéance</label>
                        <input 
                            type="date" 
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 text-slate-700"
                            value={newDate}
                            onChange={(e) => setNewDate(e.target.value)}  
                        />
                    </div>
                </div>

                {/* Boutons POUR CONFIRMER OU ANNULER LE CHOIX  */}
                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                    <button onClick={handleAddTask} className="flex-1 bg-indigo-600 text-white px-5 py-3 rounded-xl shadow-md hover:bg-indigo-700 hover:shadow-lg font-bold transition-all">
                        Confirmer
                    </button>
                    <button onClick={() =>{ setAddingTodos(false),setErrorMessage("")}} className="flex-1 bg-white border border-slate-200 text-slate-600 px-5 py-3 rounded-xl hover:bg-slate-50 font-bold transition-colors">
                        Annuler
                    </button>
                </div>

                {/* Message Erreur */}
                {errorMessage && (
                    <div className="mt-4 bg-red-50 border border-red-100 text-red-500 px-4 py-2 rounded-xl text-center font-medium text-sm">
                        {errorMessage}
                    </div>
                )}
            </div>
        )}
        
    </div>
  )
}
