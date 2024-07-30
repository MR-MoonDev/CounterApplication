import React from 'react'
import { useSelector } from 'react-redux'
const Count = () => {
    const count = useSelector((state)=>state);
  return (
    <div className='rounded-lg border-2 border-black bg-white p-9'>{count}</div>
  )
}

export default Count