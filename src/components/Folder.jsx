import { useState } from "react"
import data from "../data/data"
export default function Folder() {
  return (
    <div>
        <ul>
            {data.map( (dataFolder) =>
                <li key={dataFolder.idFolder} className="mt-4">
                    {dataFolder.nameFolder}
                    
                </li>
             )}
        </ul>
       
    </div>
  )
}
