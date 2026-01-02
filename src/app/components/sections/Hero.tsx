import { AiFillCaretRight } from "react-icons/ai"
import CustomButton from "../CustomButton"


const Hero = () => {
  return (
    <section id="hero" className="bg-primary text-white 
    grid grid-cols-2 h-screen ">
    <div className=" col-span-1 flex flex-col
      gap-8 h-fit my-auto">
      <h1 className=" text-7xl font-extrabold w-2/3
       self-end ">
        ACHIEVE YOUR FITNESS DREAMS</h1>
        <p className=" text-xl text-stone-200 w-2/3 self-end">
          Through personalized coaching, cutting 
          edge techniques and support we will help 
          you achieve the fitness goals you have
           always wanted</p>
           <div className=" flex gap-4 w-2/3 self-end items-center">
            <CustomButton text="Join Now" />
            <div className=" flex items-center gap-2 font-medium
             group cursor-pointer text-lg">
            <button
                className="relative overflow-hidden bg-white
                          text-primary rounded-full w-18 h-18
                          flex items-center justify-center
                          "
              >
              <AiFillCaretRight
                className="
                  size-12
                  transition-transform duration-200 ease-out
                  group-hover:scale-120
                "
              />
            </button>
              <p>Watch Now</p>
            </div>
            
           </div>
    </div>
    <div></div>
  </section>
  )
}

export default Hero