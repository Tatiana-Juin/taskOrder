import React from 'react'
import { useState } from 'react'
import AlertDelete from './AlertDelete'

export default function DeleteFolder({folderId,datas,setDatas,folderToDelete,setFolderToDelete}) {

    const handleDeleteFolder = ()=>{
        
        const newData = datas.filter(folder=>{
            return folder.idFolder !== folderToDelete.idFolder
        })
        setDatas(newData)
        setFolderToDelete(false)
    }

  return (
    <AlertDelete
        title="Suppression d'un dossier"
        message="Es-tu sur de vouloir supprimer le dossier et les taches associé"
        onCancel={()=>setFolderToDelete(false)}
        onConfirm={handleDeleteFolder}
    />
  )
}
