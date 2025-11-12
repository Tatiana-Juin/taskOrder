import { useState } from "react"
import data from "../data/data"
import { Link } from "react-router-dom";

export default function Folder({datas,setDatas}) {

  // POUR RECUPERER CE QUE SAISIE L'UTILISATEUR POUR UN NOUVEAU DOSSIER 
  const [newFolder,setNewFolder] = useState("");
  // POUR SWITCHER ENTRE VOIR UN INPUT ET NE PAS VOIR INPUT POUR AJOUTER DU DOSSIER 
  const[addingFolderId,setAddingFolderId] = useState(false)

  // FONCTION POUR AJOUTER UN DOSSIER 
  const handleAddFolder = ()=>{
    
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
      <div>
          
         
          {/* AFFICHE LES DOSSIER  */}
            {datas.map( (dataFolder) =>
              
                <Link 
                  key={dataFolder.idFolder}
                  to={`/folder/${dataFolder.idFolder}`}
                  className="m-4 text-black px-5 py-3 rounded-xl shadow-md cursor-pointer "
                 >
                  {dataFolder.nameFolder}
                </Link>
            )}

            {/* BOUTON POUR FAIRE APPARAITRE L'INPUT QUI PERMET D'AJOUTER UN INPUT */}
             <button className="m-4 text-black px-5 py-3 rounded-xl shadow-md cursor-pointer" onClick={handleFolderClick}> + Ajout d'un dossier</button>

             {/* CONDITION POUR FAIRE APPARAITRE L'INPUT ET SES BOUTON  */}
              {addingFolderId === true && (
                <div >
                    <input type="text" className="border border-black" value={newFolder} onChange={(e) =>setNewFolder(e.target.value)} placeholder="Nom du dossier" />

                    <button className="m-4 text-black px-5 py-3 rounded-xl shadow-md cursor-pointer" onClick={handleAddFolder}> Ajouter</button>

                    <button className="m-4 text-black px-5 py-3 rounded-xl shadow-md cursor-pointer" onClick={()=>setAddingFolderId(false)}> Annuler</button>
                </div>
              )}

      </div>
    </>
  )
}
