import React, { useState } from 'react'

const OtpGenerator = () => {
    const [otp  , setOtp] = useState('')

    const generatorOtp = () =>{
        const newotp = Math.floor(10000 + Math.random() * 9000)
        setOtp(newotp)
    }
  return (
    <div className='full'>
        <div  className='flex justify-center items-center mt-11 '>
            <div className='drop-shadow-2xl bg-red-200 pt-10 w-80 h-auto  rounded-lg  text-center  ' >
            <h1 className=' font-semibold text-4xl' >OTP Generator</h1>
                 {otp && (
                    <div className='w-full flex justify-center mt-5 '>
                    <div className=' w-24 h-10 bg-slate-100 rounded-full '>
                        <h1 className='mt-2 font-medium'>{otp}</h1> 
                    </div>
                    </div>
                 )}   
                <button className=' cursor-pointer mt-6 bg-red-600 w-20  text-white mb-10 rounded-full ' onClick={generatorOtp}>OTP</button>
            </div>
        </div>
    </div>
  )
}

export default OtpGenerator