import { useState } from "react"
import data from "../data/data"

export default function Folder() {

  // POUR INITIALISER LES DONNES AVEC USE STATE 
  const [datas,setData] = useState(data);
  // POUR RECUPERER CE QUE SAISIE L'UTILISATEUR POUR UN NOUVEAU DOSSIER 
  const [newFolder,setNewFolder] = useState("");
  // POUR SWITCHER ENTRE VOIR UN INPUT ET NE PAS VOIR INPUT POUR AJOUTER DU DOSSIER 
  const[addingFolderId,setAddingFolderId] = useState(false)

  // FONCTION POUR AJOUTER UN DOSSIER 
  const handleAddFolder = ()=>{
    
    // CREATION DU NOUVEAU DOSSIER
    const addFolder={
      idFolder:Date.now(),
      nameFolder:newFolder,
      todos:[]
    }
    
    setData([...datas,addFolder]);
  }

  // FONCTION POUR SWITCHER ENTRE FALSE ET TRUE 
  const handleFolderClick = ()=>{
    setAddingFolderId(true);
    // console.log(addingFolderId);
  } 

  return (
    <>
      <div>
          {/* <input type="text" className="border border-black" value={newFolder} onChange={(e) =>setNewFolder(e.target.value)} placeholder="Nom du dossier" /> */}
          {/* BOUTON POUR AJOUTER UN DOSSIER  */}
          <button className="m-4 text-black px-5 py-3 rounded-xl shadow-md cursor-pointer" onClick={handleFolderClick}> + dossier</button>

          {/* AFFICHE LES DOSSIER  */}
            {datas.map( (dataFolder) =>
              
                <button key={dataFolder.idFolder} className="m-4 text-black px-5 py-3 rounded-xl shadow-md cursor-pointer ">{dataFolder.nameFolder}</button>
            )}
              

      </div>
    </>
  )
}
