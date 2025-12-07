import { useState } from "react"
import { Link } from "react-router-dom";
import UpdateFolder from "./UpdateFolder";
import DeleteFolder from "./DeleteFolder";

export default function Folder({datas,setDatas,setTaskToEdit}) {

  // POUR RECUPERER CE QUE SAISIE L'UTILISATEUR POUR UN NOUVEAU DOSSIER 
  const [newFolder,setNewFolder] = useState("");
  // POUR SWITCHER ENTRE VOIR UN INPUT ET NE PAS VOIR INPUT POUR AJOUTER DU DOSSIER 
  const[addingFolderId,setAddingFolderId] = useState(false);
  const [errorMessage,setErrorMessage] = useState("");
  

  // FONCTION POUR AJOUTER UN DOSSIER 
  const handleAddFolder = ()=>{
    
    if(newFolder.trim()==""){
       setErrorMessage("Erreur tu doit saisir du texte pour ajouter un dossier")
        return;
    }

    setErrorMessage("")

    // CREATION DU NOUVEAU DOSSIER
    const addFolder={
      idFolder:Date.now().toString(),
      nameFolder:newFolder,
      todos:[]
    }
    
    setDatas([...datas,addFolder]);
    setAddingFolderId(false)
    setNewFolder("");
  }

  // FONCTION POUR SWITCHER ENTRE FALSE ET TRUE 
  const handleFolderClick = ()=>{
    setAddingFolderId(true);
  
  } 

  return (
    <>
      
      <div className="my-8 px-4">
          
          {/* AFFICHE LES DOSSIERS */}
          <div className="flex flex-wrap gap-4 justify-center">
            {datas.map( (dataFolder) =>
              <Link 
                key={dataFolder.idFolder}
                to={`/folder/${dataFolder.idFolder}`}
                className="bg-white text-slate-700 border border-slate-200 px-6 py-3 rounded-2xl shadow-sm hover:shadow-md hover:border-indigo-300 hover:text-indigo-600 transition-all duration-200 font-medium text-center min-w-[120px]"
               >
                {dataFolder.nameFolder}
              </Link>
            )}

            {/* BOUTON POUR FAIRE APPARAITRE L'INPUT QUI PERMET D'AJOUTER UN INPUT */}
             <button 
                className="bg-indigo-600 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all duration-200 font-medium whitespace-nowrap" 
                onClick={() =>{handleFolderClick(),setTaskToEdit(false)}}
             > 
                + Nouveau dossier
             </button>
           </div>

             {/* CONDITION POUR FAIRE APPARAITRE L'INPUT ET LE BOUTON */}
             {addingFolderId === true && (
               <div className="mt-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-md mx-auto animate-in fade-in slide-in-from-top-4 duration-300">
                   <h3 className="text-lg font-bold text-slate-800 mb-3 text-center">Créer un nouveau dossier</h3>
                   
                   <input 
                        type="text" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all mb-4" 
                        value={newFolder} 
                        onChange={(e) =>setNewFolder(e.target.value)} 
                        placeholder="Ex: Courses, Travail..." 
                   />

                   <div className="flex gap-3 justify-center">
                       <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl shadow hover:bg-indigo-700 transition-all font-medium" onClick={handleAddFolder}> Valider</button>
                       <button className="text-slate-500 hover:bg-slate-100 px-6 py-2.5 rounded-xl transition-colors font-medium" onClick={()=>{setAddingFolderId(false),setErrorMessage("")}}> Annuler</button>
                   </div>

                    {errorMessage && (
                     <p className="text-red-500 mt-3 text-sm font-medium text-center bg-red-50 p-2 rounded-lg">{errorMessage}</p>
                  )}
               </div>
             )}
      </div>
    </>
  )
}
