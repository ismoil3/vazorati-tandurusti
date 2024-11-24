import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-[1280px] m-auto p-[10px_20px]'>
        {children}
    </div>
  )
}

export default Container