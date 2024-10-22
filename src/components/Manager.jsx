import { useRef } from "react"
import showEye from "/show.png"
import hideEye from "/hide.png"
import { useState } from "react"
import { useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const [form, setForm] = useState({ site: "", username: "", password: "" })

    // Show password 
    const ref = useRef();
    const passRef = useRef();
    const showPassword = () => {
        passRef.current.type = "password"
        if (ref.current.src.includes('/hide.png')) {
            ref.current.src = "/show.png"
            passRef.current.src = "password"
        }
        else {
            ref.current.src = '/hide.png'
            passRef.current.type = "text"
        }
    }

    // This is handle change in input oxes and capture them
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    // Creating state for saving the passwords
    const [paswordArray, setPasswordArray] = useState([])

    // Useeffect for running when the component will get mounted
    useEffect(() => {
        let localPassword = localStorage.getItem("localPassword")
        if (localPassword) {
            setPasswordArray(JSON.parse(localPassword))
        }
    }, [])
    // Save the password
    const savePassword = () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
            setPasswordArray([...paswordArray, { ...form, id: uuidv4() }])
            console.log(form);

            localStorage.setItem("localPassword", JSON.stringify([...paswordArray, { ...form, id: uuidv4() }]))
            console.log(form);
            console.log([...paswordArray, form]);

            setForm({ site: "", username: "", password: "" });
        }
    }

    // Delete the passwords
    const deletePassword =(id)=>{
        console.log("Delete button is clicked");
        let c = confirm("You sure yoou want to delete the password ?")
        if(c){
            setPasswordArray(paswordArray.filter(item=>item.id !== id))
            localStorage.setItem("localPassword",JSON.stringify(paswordArray.filter(item=>item.id !== id)))
        }
    }


    // Edit passwords
    const editPassword=(id)=>{
        setForm(paswordArray.filter(i=>i.id === id)[0])
        setPasswordArray(paswordArray.filter(item =>item.id !== id))
    }
    return (
        <>
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            <div className="text-white  text-center mt-5 myContainer">
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
                    <input name="site" id="site" value={form.site} onChange={handleChange} type="text" placeholder="Enter Website URL" className="rounded-full border-2 border-green-500 w-full text-black p-4 py-1 h-12" />
                    <div className="flex flex-col md:flex-row w-full justify-between gap-3">
                        <input name="username" id="username" value={form.username} onChange={handleChange} type="text" placeholder="Enter User Name" className="rounded-full border-2 border-green-500 w-full text-black p-4 py-1  h-12" />
                        <div className="relative">
                            <input ref={passRef} name="password" id="password" value={form.password} onChange={handleChange} type="password" placeholder="Enter Password" className="rounded-full border-2 border-green-500 text-black p-4 py-1  h-12" />
                            <span className="absolute w-8 right-2 top-2 cursor-pointer" onClick={showPassword}>
                                <img ref={ref} src={showEye} alt="" />
                            </span>
                        </div>
                    </div>
                    <button onClick={savePassword} className="flex items-center bg-green-500 text-black font-bold p-2 rounded-full text-l hover:bg-green-300  hover:"><img width="30" height="40" src="https://img.icons8.com/3d-fluency/94/save.png" alt="save" className="invert" />Add Password</button>
                </div>


                {/* Table code */}
                <div className="password-table font-bold text-lg">
                    <h1 className="text-3xl font-bold underline text-start">Your Sav
                        <span className="text-green-500">
                            ed Passwords  -:
                        </span>
                    </h1>
                    {paswordArray.length === 0 && <div className='text-white'>Opps ! No passwords to show</div>}
                    {paswordArray.length !== 0 &&
                        <table className="table-auto w-full overflow-hidden rounded-xl my-5 text-center">
                            <thead className=" bg-green-800 py-5">
                                <tr>
                                    <th className=" py-3">Website</th>
                                    <th className=" py-3">UserName</th>
                                    <th className=" py-3">Password</th>
                                    <th className=" py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-green-200 text-black font-bold">
                                {paswordArray.map((item, index) => {
                                    return <tr key={index}>
                                        <td className=" py-3">{item.site}</td>
                                        <td className=" py-3">{item.username}</td>
                                        <td className=" py-3">{item.password}</td>
                                        <td className="py-3 flex justify-center gap-4">
                                            <button onClick={()=>editPassword(item.id)} className="edit-button bg-blue-500 text-white py-2 px-4 rounded transition-transform duration-200 hover:bg-blue-600 hover:scale-105">
                                                Edit
                                            </button>
                                            <button onClick={()=>deletePassword(item.id)} className="delete-button bg-red-500 text-white py-2 px-4 rounded transition-transform duration-200 hover:bg-red-600 hover:scale-105">
                                                Delete
                                            </button>
                                        </td>

                                    </tr>

                                })}
                            </tbody>
                        </table>}
                </div>
            </div>
        </>
    )
}

export default Manager
