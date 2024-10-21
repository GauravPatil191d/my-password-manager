import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-slate-500 text-xl'>
            <div className='text-white font-bold myContainer flex justify-between text-center items-center  px-4 py-5 h-16'>
                <div className="text">
                    <span className='bg-black text-xl' >
                        &lt;
                        P@ss
                        <span className='text-green-500'>
                            Man
                            / &gt;
                        </span>
                    </span>
                </div>
                <div className="git-image flex bg-black w-40 h-12 gap-3 items-center justify-center">
                    <img className='w-10 invert' src="/github.svg" alt="" />
                    <p>Git
                        <span className='text-green-500'>
                            hub
                        </span>
                    </p>

                </div>
            </div>
        </nav>
    )
}

export default Navbar
