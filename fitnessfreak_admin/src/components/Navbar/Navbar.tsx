"use client"
import React, { useEffect, useState } from 'react'
import './Navbar.css'
import Image from 'next/image'
import Link from 'next/link'
import logo from './logo.png'
const Navbar = () => {
    const [isAdminAuthenticated, setAdminAuthenticetd] = useState(false)
  return (
    <div className="navbar">
        <Image src={logo} alt="logo" width={100} className='logo'/>
        {
            isAdminAuthenticated ? (
                <>
                <Link href='/pages/addworkout'>Add Workout</Link>
                </>    
            ) : (
                <>
                <Link href='/adminauth/login'>Login</Link>
                <Link href='/adminauth/register'>Signup</Link>
                </>  
            )
        }
    </div>
  )
}

export default Navbar
