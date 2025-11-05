import { useState } from "react"
import data from "../data/data"
export default function Folder() {


  return (
    <div>

      {/* AFFICHE LES DOSSIER  */}
            {data.map( (dataFolder) =>
               
                <button key={dataFolder.idFolder} className="m-4 text-black px-5 py-3 rounded-xl shadow-md cursor-pointer ">{dataFolder.nameFolder}</button>
             )}
        
        

    </div>
  )
}
