import { SlArrowRight } from "react-icons/sl"
import React from 'react'

interface CustomButtonProps {
  text: string;
  bgColor: string;
  bgHover: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, bgColor, bgHover }) => {
    return (
     
        <button
        className={`relative 
          overflow-hidden  rounded-full
               ${bgColor} text-primary 
               border border-secondary
                group font-medium text-lg cursor-pointer`}>
         
        <span
          className={`absolute inset-0 ${bgHover}
            scale-15 opacity-0 rounded-full
            group-hover:scale-120 group-hover:opacity-100
             group-hover:text-white
            transition-all duration-400 ease-in-out`}>
        </span>

        <span className="relative px-6 py-5 z-10 group-hover:text-white 
        transition-colors duration-300 flex justify-center items-center gap-2">
          {text}
          <SlArrowRight />
        </span>
        
      </button>
    )
  }
  
  export default CustomButton


