import { useState } from "react"

export default function UpdateFolder({folderId,datas,setDatas,folderToEdit,setFolderToEdit}) {
  
  const [updateTextFolder,setUpdateFolderText] = useState(folderToEdit.nameFolder)

   const [errorMessage,setErrorMessage] = useState("");

  const handleUpdateFolder = () =>{

    if(updateTextFolder==""){
         setErrorMessage("Erreur le nom du dossier en peut pas etre vide ");
         return;
      }
    const newData = datas.map(folder =>{
      if(folder.idFolder !== folderId){
        return folder;
      }
      
      setErrorMessage("");
      return{
        ...folder,
        nameFolder:updateTextFolder,

      }

    })

    setDatas(newData)
    setFolderToEdit(false)
  }

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-sm">
       
       <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Renommer le dossier</h3>
        {/* INPUT POUR MODIFIER LE DOSSIER  */}
       <input 
        type="text" 
        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium mb-2"
        value={updateTextFolder}
        onChange={(e) => setUpdateFolderText(e.target.value)}
        autoFocus
      />
        {/* MESSAGE ERREUR  */}
        {errorMessage && (
          <p className="text-red-500 text-sm font-medium text-center mb-4 bg-red-50 p-2 rounded-lg">{errorMessage}</p>
        )}
        {/* POUR VALIDE ROU ANNULER LA MODIFICATION DU DOSSIER  */}
        <div className="flex flex-col gap-3 mt-4">
             <button className="w-full bg-indigo-600 text-white px-5 py-3 rounded-xl shadow-md hover:bg-indigo-700 font-bold transition-all" onClick={()=> handleUpdateFolder()}>
                Valider la modification
            </button>
            <button className="w-full text-slate-500 px-5 py-3 rounded-xl hover:bg-slate-50 font-bold transition-colors" onClick={()=>{setFolderToEdit(false),setErrorMessage("")}}>
                Annuler
            </button>
        </div>
    </div>
  </div>
    
    
  )
}
// 