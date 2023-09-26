'use client'
import { useState } from 'react'

function ProductCard ({ name, price }) {
  const [number, setNumber] = useState(0)

  const handlerClick = () => {
    setNumber(number + 1)
  }

  return (
    <div className="bg-black text-white w-60 rounded-md p-10 flex flex-col items-center justify-center">
      <h3>{ name }</h3>
      <p>${ price }</p>

      <button onClick={ handlerClick } className="bg-blue-500 rounded-md mt-5 px-4 py-2 flex gap-2 transition ease-linear duration-100 active:scale-95">
        <span className="material-symbols-outlined">add</span>
        { number }
      </button>
    </div>
  )
}
export default ProductCard
