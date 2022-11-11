"use client"
import { useState } from 'react'
import Link from "next/link"


export default function Home() {

  const [session, setSession] = useState(false)
  return (
    < >
      {session ? User() : Guest()}

      
    </>
  )
}

// Guest

function Guest () {
  return (
    < >
      <main className="container mx-auto text-center py-20" >
        <h3 className='text-4xl font-bold text-red-500 my-5'>
          Welcome to Guest Homepage
        </h3>
        <div className="flex justify-center">
          <Link href ='./login' className="mt- px-10 py-1 rounded-sm bg-indigo-500 text-gray-50">Login</Link>

        </div>

        
      </main>

      
    </>
  )
}

// Authorised User

function User () {
   return (
    < >
      <main className="container mx-auto text-center py-20" >
        <h3 className='text-4xl font-bold text-red-500 '>
          Welcome to Authorised User Homepage
        </h3>
        <div className="details">
          <h5>Unknown</h5>
          <h5>Unknown</h5>

        </div>
        <div className="flex justify-center  ">
          <button className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50">Sign Out</button>
        </div>
        <div className="flex justify-center">
          <Link href ='./profile' className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50">Profile Page</Link>

        </div>

        
      </main>

      
    </>
  )

}