import React from 'react'

function FillButton(props: {label: string}) {
  return (
    <div>
        <button className='rounded-full font-md px-4 py-2 bg-gray-800 text-white hover:bg-gray-600'>{props.label}</button>
    </div>
  )
}

export default FillButton