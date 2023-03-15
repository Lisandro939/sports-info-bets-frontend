import React from 'react'

export default function Welcome() {
  return (
    <div className="w-screen bg-lightOrange h-50 flex flex-col gap-4 align-center items-center py-6 px-4">
      <p className="text-sm text-center">
        Bienvenido a Sports Zone. 
        Tu destino definitivo para noticias de deportes, resultados, tablas de clasificación y más.
        ¡Próximamente más actualizaciones!
        Clickea el botón de abajo para saber mas.
      </p>
      <button className="bg-primary text-white px-4 py-2 w-fit rounded-sm">
        Click aquí
      </button>
    </div>
  )
}
