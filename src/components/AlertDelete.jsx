import React from 'react'

export default function AlertDelete({title,message,onCancel,onConfirm}) {
  return (
     <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-[300px]">

        <h2 className="text-lg font-bold mb-4">{title}</h2>
        <p className="mb-6">{message}</p>

        <div className="flex justify-end gap-3">
          <button 
            className="px-4 py-2 bg-gray-300 rounded-xl cursor-pointer"
            onClick={onCancel}
          >
            Annuler
          </button>

          <button 
            className="px-4 py-2 bg-red-500 text-white rounded-xl cursor-pointer"
            onClick={onConfirm}
          >
            Oui, supprimer
          </button>
        </div>
      </div>
    </div>
  )
}
