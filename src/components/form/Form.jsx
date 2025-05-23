import React, {useRef, useState} from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const Form = () => {

    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passRef = useRef(null)

    const [id, setId] = useState("")
    const [number, setNumber] = useState("")
    const [confirm, setConfirm] = useState("")
    const [gender, setGender] = useState("")

    const [data, setData] = useState([])

    const [showForm, setShowForm] = useState(false);

    const [editIndex, setEditIndex] = useState(null)

    console.log("book render");
    console.log(nameRef.current);

    const handleSubmit = (e) => {
        e.preventDefault()

        let newUser = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passRef.current.value,

            id: id,
            phone: number,
            confirm_password: confirm,
            gender: gender
        }

        // setData([...data, newUser])
        if (editIndex !== null) {
          // Update mavjud user
          const updatedData = [...data]
          updatedData[editIndex] = newUser
          setData(updatedData)
          setEditIndex(null) // Tahrirlash rejimini tozalash
        } else {
          // Yangi user qo‘shish
          setData([...data, newUser])
        }

        setShowForm(false)

        setId("")
        setNumber("")
        setConfirm("")
        nameRef.current.value = ""
        emailRef.current.value = ""
        passRef.current.value = ""

        console.log(newUser); 
        console.log("salom");
    }

    const handleDelete = (index) => {
        const newData = [...data];
        newData.splice(index, 1);
        setData(newData);
    }

    const handleEdit = (index) => {
      const user = data[index]

      nameRef.current.value = user.name
      emailRef.current.value = user.email
      passRef.current.value = user.password
      setId(user.id)
      setNumber(user.phone)
      setConfirm(user.confirm_password)

      setEditIndex(index)
      setShowForm(true)  
    }

    console.log(data);
    console.log("hello");

  return ( 
    <div className='container mx-auto flex flex-col items-center justify-center'>
        <header className="w-full shadow-md bg-white py-4 px-10 flex items-center justify-between fixed top-0 left-0 z-10">
          <h1 className="text-3xl font-bold text-gray-800">User</h1>
          <button
            onClick={() => setShowForm(true)}
            className="text-white bg-blue-600 font-medium px-6 py-2 cursor-pointer rounded-xl text-xl hover:bg-blue-700 transition"
          >
            Registration
          </button>
        </header>

        {showForm && (
            <div className="fixed top-0 left-0 w-full h-full z-20 flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }} onClick={() => setShowForm(false)}>
                <form onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit} action="" className='flex items-center justify-center flex-col rounded-2xl relative w-200 p-8 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] my-20'>
                    <h2 className='text-5xl font-semibold mb-10 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]'>Registration</h2>

                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="absolute top-4 right-4 text-gray-500 text-2xl hover:text-black"
                    >
                      ×
                    </button>

                    <div className='flex items-center gap-20 px-10'>
                        <div className="ref">
                            <label htmlFor="name" className='text-xl font-medium block mb-2'>Full Name</label>
                            <input required ref={nameRef} type="text" id='name' placeholder='Enter your name' className='text-xl mb-6 border-1 border-gray-300 rounded-xl py-3 px-5 pr-20 bg-white shadow-[0_4px_10px_rgba(0,0,0,0.2)]' />

                            <label htmlFor="email" className='text-xl font-medium block mb-2'>Email</label>
                            <input required ref={emailRef} type="email" id='email' placeholder='Enter your email' className='text-xl mb-6 border-1 border-gray-300 rounded-xl py-3 px-5 pr-20 bg-white shadow-[0_4px_10px_rgba(0,0,0,0.2)]' />

                            <label htmlFor="password" className='text-xl font-medium block mb-2'>Password</label>
                            <input required ref={passRef} type="password" id='password' placeholder='Enter your password' className='text-xl mb-6 border-1 border-gray-300 rounded-xl py-3 px-5 pr-20 bg-white shadow-[0_4px_10px_rgba(0,0,0,0.2)]' />
                        </div>

                        <div className="state">
                            <label htmlFor="id" className='text-xl font-medium block mb-2'>Registered Id</label>
                            <input required value={id} onChange={(e1) => setId(e1.target.value)} type="text" id='id' placeholder='Enter your Id' className='text-xl mb-6 border-1 border-gray-300 rounded-xl py-3 px-5 pr-20 bg-white shadow-[0_4px_10px_rgba(0,0,0,0.2)]' />

                            <label htmlFor="number" className='text-xl font-medium block mb-2'>Phone Number</label>
                            <input required value={number} onChange={(e2) => setNumber(e2.target.value)} type="number" id='number' placeholder='Enter your number' className='text-xl mb-6 border-1 border-gray-300 rounded-xl py-3 px-5 pr-20 bg-white shadow-[0_4px_10px_rgba(0,0,0,0.2)]' />

                            <label htmlFor="confirm" className='text-xl font-medium block mb-2'>Confirm Password</label>
                            <input required value={confirm} onChange={(e3) => setConfirm(e3.target.value)} type="password" id='confirm' placeholder='Confirm your password' className='text-xl mb-6 border-1 border-gray-300 rounded-xl py-3 px-5 pr-20 bg-white shadow-[0_4px_10px_rgba(0,0,0,0.2)]' />
                        </div>
                    </div>

                    <div className='flex absolute bottom-24 left-10'>
                        <p className='text-3xl font-semibold inline mr-10'>Gender</p>

                        <div className='flex flex-col'>
                            <label className="inline-flex items-center mr-4">
                            <input type="radio" name="gender" className="form-radio text-blue-600" value="male" onChange={(e) => setGender(e.target.value)} checked={gender === "male"} />
                            <span className="ml-2 text-gray-700 text-lg font-medium">Male</span>
                            </label>

                            <label className="inline-flex items-center">
                            <input type="radio" name="gender" className="form-radio text-pink-500" value="female" onChange={(e) => setGender(e.target.value)} checked={gender === "female"} />
                            <span className="ml-2 text-gray-700 text-lg font-medium">Female</span>
                            </label>
                        </div>
                    </div>

                    <button  type="submit" onClick={handleSubmit} className='mt-22 border-1 border-gray-200 rounded-xl py-2 px-5 bg-gray-200 shadow-[0_1px_2px_rgba(0,0,0,0.1)] text-2xl font-semibold drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] active:drop-shadow-[2px_2px_3px_rgba(0,0,0,0.4)] transition-colors duration-200'>Register</button>
                </form>
            </div>
        )}


        <div className='container mx-auto grid grid-cols-3 gap-5 mb-10 mt-[120px]'>
            {
                data.length > 0 && data?.map((user, index) => (
                    <div key={index} className="w-full max-w-md mx-auto my-2 bg-white relative rounded-2xl shadow-2xl p-8 space-y-6 min-h-[480px] hover:scale-101">
                      
                      <div className='absolute right-7'>
                        <button>
                            <FaRegHeart className='text-2xl cursor-pointer hover:text-red-500' />
                        </button>
                      </div>  

                      <div className="w-28 h-28 mx-auto rounded-full bg-gray-200 shadow-inner mt-2 flex items-center justify-center">
                        <p className='text-[45px] font-bold text-gray-800 hover:scale-105'>{user.name.split(' ')[0].split('')[0]}{user.name.split(' ')[1].split('')[0]}</p>
                      </div>

                      <div className="text-center space-y-2">
                        <h2 className="text-3xl font-bold text-gray-800">{user.name}</h2>
                        <p className="text-lg text-gray-600 font-medium">ID: {user.id}</p>
                        <p className="text-lg text-gray-600">Email: {user.email}</p>
                        <p className="text-lg text-gray-600">Phone: {user.phone}</p>
                        <p className="text-lg text-gray-600">Gender: {user.gender}</p>
                      </div>

                      <div className="flex justify-center space-x-6 pt-4">
                        <a
                          href="https://linkedin.com/in/example"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 text-lg font-medium underline"
                        >
                          LinkedIn
                        </a>
                        <a
                          href="https://github.com/example"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-800 hover:text-black text-lg font-medium underline"
                        >
                          GitHub
                        </a>
                      </div>

                      <div className='flex items-center justify-between bottom-0 right-0'>
                        <button onClick={() => handleEdit(index)}>
                            <FaRegEdit className='text-2xl text-blue-500 cursor-pointer hover:text-blue-700' />
                        </button>
                        <button onClick={() => handleDelete(index)}>
                            <MdDeleteOutline className='text-[25px] text-red-500 cursor-pointer hover:text-red-700' />
                        </button>
                      </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default React.memo(Form)