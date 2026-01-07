import Link from 'next/link'
import React from 'react'
import { SlArrowRight } from "react-icons/sl";
import CustomButton from '../CustomButton';

const Navbar = () => {
  return (
    <div className='flex justify-evenly items-center py-6 
     bg-primary text-lg font-semibold text-white sticky top-0 z-50 '>
      <div className='text-4xl font-thin'>Revamp</div>
      <div className='flex justify-center items-center gap-8'>
        <Link href="#about">About</Link>
        <Link href="#programs">Programs</Link>
        <Link href="#trainers">Team</Link>
        <Link href="#pricing">Pricing</Link>
        <Link href="#contact">Contact</Link>
      </div>
      <CustomButton bgColor='bg-secondary' bgHover='bg-primary' text='Start Free Trail' />
      


    </div>
  )
}

export default Navbar