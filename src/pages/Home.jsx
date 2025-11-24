import React from 'react'
import Folder from '../components/Folder'
// import { data } from 'react-router-dom'

export default function Home({datas,setDatas}) {

  
  return (
    <>
    <div>
        <Folder 
            datas={datas}
            setDatas={setDatas}
        />

        <div className='flex justify-center'>
            <h2 className='text-center text-lg'>Toutes les tâches</h2>
        </div>

       {datas.map((folder) =>(
        <>
          <p key={folder.idFolder} className='text-center font-bold'> {folder.nameFolder}  </p>
          {folder.todos.map( (todo) =>(
            <div key={todo.idTodo} className="flex items-center justify-between  border border-gray-200 rounded-xl p-4 my-3  ">
              {/* affiche les elements */}
              <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-5 h-5 cursor-pointer accent-green-500"/>
                  <p className="text-gray-800 text-lg">{todo.text}</p>
                  <p className="text-gray-800 text-lg" >{todo.dateTodo}</p>
              </div>
              
              <div className="flex gap-3">
                  <button className="text-black px-5 py-2 rounded-xl shadow-md cursor-pointer bg-blue-100 hover:bg-blue-200 transition-all duration-150" >Modifier</button>
                  <button  className="text-black px-5 py-2 rounded-xl shadow-md cursor-pointer bg-red-100 hover:bg-red-200 transition-all duration-150" >Supprimer</button>
              </div>

              
           </div>
          ) )}
        </>
       ))}
    </div>
    </>
  )
}
