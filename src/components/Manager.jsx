

const Manager = () => {
    return (
        <>
            <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            <div class="text-white  text-center mt-5 myContainer">
                <h3 className="text-3xl font-bold">   &lt;
                    <span className='text-green-500'>
                    P@ss
                    </span>
                        MAN
                        / &gt;
                </h3>
                <p className="text-lg font-semibold text-white">
                        Secure your digital life with our intuitive Password Manager -
                    <span className="text-green-500 font-bold">
                    "where strong passwords meet effortless convenience!"
                    </span>
                </p>
                <div className="flex items-center p-4 gap-8 justify-center flex-col ">
                    <input type="text" placeholder="Enter Website URL" className="rounded-full border-2 border-green-500 w-full text-black p-4 py-1 h-12" />
                    <div className="flex flex-col md:flex-row w-full justify-between gap-3">
                        <input type="text" placeholder="Enter User Name" className="rounded-full border-2 border-green-500 w-full text-black p-4 py-1  h-12" />
                        <input type="text" placeholder="Enter Password" className="rounded-full border-2 border-green-500 text-black p-4 py-1  h-12" />
                    </div>
                    <button className="flex items-center bg-green-500 text-black font-bold p-2 rounded-full text-l hover:bg-green-300  hover:"><img width="30" height="40" src="https://img.icons8.com/3d-fluency/94/save.png" alt="save" className="invert" />Add Password</button>
                </div>


                {/* Table code */}
                <div className="password-table font-bold text-lg">
                    <h1 className="text-3xl font-bold underline text-start">Your Sav
                        <span className="text-green-500">
                            ed Passwords  -:
                        </span>
                    </h1>
                    <table class="table-auto w-full overflow-hidden rounded-xl my-5 text-center">
                        <thead class=" bg-green-800 py-5">
                            <tr>
                                <th className=" py-3">Website</th>
                                <th className=" py-3">UserName</th>
                                <th className=" py-3">Password</th>
                                <th className=" py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-green-200 text-black font-bold">
                            <tr>
                                <td className=" py-3">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                <td className=" py-3">Malcolm Lockyer</td>
                                <td className=" py-3">1961</td>
                                <td className=" py-3">Edit & Delete</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Manager
