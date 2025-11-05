import { useState } from "react"
import data from "../data/data"
export default function Folder() {


  return (
    <div>

      {/* AFFICHE LES DOSSIER  */}
        
            {data.map( (dataFolder) =>
               
                <button key={dataFolder.idFolder} className="mt-4">{dataFolder.nameFolder}</button>
             )}
        
        

    </div>
  )
}
