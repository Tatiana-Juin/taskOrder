import React from 'react'
import { useState } from 'react'
import AlertDelete from './AlertDelete'
import { useNavigate } from 'react-router-dom';

export default function DeleteFolder({folderId,datas,setDatas,folderToDelete,setFolderToDelete}) {
  // pour la navigation (useNavigate)
    const navigate = useNavigate();
    const handleDeleteFolder = ()=>{
        
        const newData = datas.filter(folder=>{
            return folder.idFolder !== folderToDelete.idFolder
        })

        setDatas(newData)
        // pour aller a la racine du 
        navigate("/");
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
