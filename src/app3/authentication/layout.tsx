import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='p-10 bg-black text-white'>
        <header>Head</header>
        {children}
        <footer>Feet</footer>
    </div>
  )
}

export default layout