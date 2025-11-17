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
    <div>
       
      <input 
        type="text" 
        className="border border-black"
        value={updateTextFolder}
        onChange={(e) => setUpdateFolderText(e.target.value)}
      />
        <button className="m-4 text-black px-5 py-3 rounded-xl shadow-md cursor-pointer" onClick={()=> handleUpdateFolder()}>
            Modifier
        </button>
        <button className="m-4 text-black px-5 py-3 rounded-xl shadow-md cursor-pointer" onClick={()=>{setFolderToEdit(false),setErrorMessage("")}}>Annuler</button>

        {errorMessage && (
          <p className="text-red-500 mt-2 font-medium">{errorMessage}</p>
        )}
    </div>
    
    
  )
}
// 