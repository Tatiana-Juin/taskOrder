import { useState } from "react"
import data from "../data/data"

export default function Folder() {

  // POUR INITIALISER LES DONNES AVEC USE STATE 
  const [datas,setData] = useState(data);
  // POUR RECUPERER CE QUE SAISIE L'UTILISATEUR POUR UN NOUVEAU DOSSIER 
  const [newFolder,setNewFolder] = useState("");

  // FONCTION POUR AJOUTER UN DOSSIER 
  const handleAddFolder = ()=>{
    
    // CREATION DU NOUVEAU DOSSIER
    const addFolder={
      idFolder:Date.now(),
      nameFolder:newFolder,
      todos:[]
    }
    
    setData([...data,addFolder]);
  }

  return (
    <>
      <div>
          <input type="text" className="border border-black" value={newFolder} onChange={(e) =>setNewFolder(e.target.value)} placeholder="Nom du dossier" />
                {/* BOUTON POUR AJOUTER UN DOSSIER  */}
          <button className="m-4 text-black px-5 py-3 rounded-xl shadow-md cursor-pointer" onClick={handleAddFolder}> + dossier</button>
          {/* AFFICHE LES DOSSIER  */}
            {datas.map( (dataFolder) =>
              
                <button key={dataFolder.idFolder} className="m-4 text-black px-5 py-3 rounded-xl shadow-md cursor-pointer ">{dataFolder.nameFolder}</button>
            )}
              

      </div>
    </>
  )
}
