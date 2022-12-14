"use client"

import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import styles from '../Form.module.css';
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useState } from 'react';

export default function Dashboard() {

   const [show, setShow] = useState(false)

   return (
    <>
    
    <section className='w-3/4 mx-auto flex flex-col gap-10'>
            <div className="title">
                <h1 className='text-gray-800 text-4xl font-bold py-4'>Explore</h1>
                <p className='w-3/4 mx-auto text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, officia?</p>
            </div>

            {/* form */}
            <form className='flex flex-col gap-5'>
                <div className={styles.input_group}>
                    <input 
                    type="email"
                    name='email'
                    placeholder='Email'
                    className={styles.input_text}
                    />
                    <span className='icon flex items-center px-4'>
                        <HiAtSymbol size={25} />
                    </span>
                </div>
                <div className={styles.input_group}>
                    <input 
                     type={`${show ? "text" : "password"}`}
                    name='password'
                    placeholder='Password'
                    className={styles.input_text}
                    />
                    <span className='icon flex items-center px-4' onClick={() => setShow(!show)}>
                        <HiFingerPrint size={25} />
                    </span>
                </div>

                {/* login buttons */}
                <div className="input-button">
                    <button type='submit' className={styles.button}>
                        Login
                    </button>
                </div>
                <div className="input-button">
                    <button type='button' className={styles.button_custom}>
                        Sign In with Google <Image src={'/assets/google.svg'} width="20" height={20} alt='Google Button' ></Image>
                    </button>
                </div>
               
            </form>

            {/* bottom */}
            <p className='text-center text-red-400 '>
                Don&apos;t have an account yet? <Link className='text-blue-700' href='/register'>Register</Link>
            </p>
        </section>
    </>
  )
}
