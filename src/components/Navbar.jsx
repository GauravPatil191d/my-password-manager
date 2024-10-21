import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-500 text-2xl h-16'>
      <div className='text-white font-bold container flex justify-between text-center pl-64 pt-3'>
        <span className='bg-black' >
        &lt;
            P@ss
            <span className='text-green-500'>
                Man
                / &gt;
            </span>
        </span>
        <div className="git-image">
        <img className='w-10' src="/github.svg" alt="" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
