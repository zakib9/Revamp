import Link from 'next/link'
import React from 'react'
import { SlArrowRight } from "react-icons/sl";
import CustomButton from '../CustomButton';

const Navbar = () => {
  return (
    <div className='flex justify-evenly items-center gap-4 py-6 
    shadow-md
     bg-primary font-semibold text-white sticky top-0 z-50 '>
      <div className='text-2xl font-bold'>Revamp</div>
      <div className='flex justify-center items-center gap-4'>
        <Link href="#about">About</Link>
        <Link href="#programs">Programs</Link>
        <Link href="#trainers">Team</Link>
        <Link href="#pricing">Pricing</Link>
        <Link href="#contact">Contact</Link>
      </div>
      <CustomButton text='Start Free Trail' />
      


    </div>
  )
}

export default Navbar