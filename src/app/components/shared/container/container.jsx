import React from 'react'

const Container = ({children,className}) => {
  return (
    <div  className={`max-w-[1280px] m-auto p-[0px_20px]${className}`}>
        {children}
    </div>
  )
}

export default Container