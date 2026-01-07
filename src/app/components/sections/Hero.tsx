import { AiFillCaretRight } from "react-icons/ai"
import CustomButton from "../CustomButton"
import Avatar from "../Avatar"
import { IoMdStar } from "react-icons/io"
import { ImDiamonds } from "react-icons/im"



const Hero = () => {
  return (
    <section id="hero" className=" flex-col h-screen">
    <div  className="bg-primary text-white 
    grid grid-cols-2 h-7/8">
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
            <CustomButton bgColor='bg-secondary' bgHover='bg-primary' text="Join Now" />
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
           <div className=" flex items-center w-2/3 self-end">
            <div className="flex -space-x-5">
                <Avatar src="/assets/1.jpg" alt="" size={50}/>
                <Avatar src="/assets/2.jpg" alt="" size={50}/>
                <Avatar src="/assets/3.jpg" alt="" size={50}/>
                <Avatar src="/assets/4.jpg" alt="" size={50}/>
                <Avatar src="/assets/5.jpg" alt="" size={50}/>
              </div> 
             <div className=" ml-4 flex-col gap-4">
              <div className=" flex gap-1 text-amber-400 items-center">
              <IoMdStar size={20} />
              <IoMdStar size={20} />
              <IoMdStar size={20} />
              <IoMdStar size={20} />
              <IoMdStar size={20} />
              <p className=" font-bold text-white text-lg">4.9</p>
              </div>
              <p>10k+ Happy Clients</p>
              </div> 
           </div>
          
    </div>
    <div className=" relative w-full overflow-hidden">
    <div className=" absolute -left-20 
    w-full h-full blur-2xl bg-radial from-secondary 
    via-secondary/5 to-0% animate-[pulse_3s_ease-in-out_infinite]"></div>
      <img
        src="/assets/model.png"
        alt=""
        className="absolute bottom-0 left-40 scale-115 subtle-bounce z-10"
      />
    </div>
  </div>
  <div className="flex h-1/8 bg-secondary text-primary 
  text-3xl font-medium overflow-hidden whitespace-nowrap">
    <div className="flex gap-20 items-center infinite-scroll">
      <ImDiamonds className="size-10 text-amber-400 shrink-0" />
      <p className="shrink-0">1k+ Strong comunity</p>
      <ImDiamonds className="size-10 text-amber-400 shrink-0"/>
      <p className="shrink-0">Top-Tier Facilities</p>
      <ImDiamonds className="size-10 text-amber-400 shrink-0"/>
      <p className="shrink-0">Advanced Equipment</p>
      <ImDiamonds className="size-10 text-amber-400 shrink-0"/>
      <p className="shrink-0">1200+ Member Transformed</p>
      <ImDiamonds className="size-10 text-amber-400 shrink-0"/>
      <p className="shrink-0">Certified Trainers</p>
      <ImDiamonds className="size-10 text-amber-400 shrink-0"/>
      <p className="shrink-0">15+ Years Experience</p>
      {/* Duplicate for seamless loop */}
      <ImDiamonds className="size-10 text-amber-400 shrink-0" />
      <p className="shrink-0">1k+ Strong comunity</p>
      <ImDiamonds className="size-10 text-amber-400 shrink-0"/>
      <p className="shrink-0">Top-Tier Facilities</p>
      <ImDiamonds className="size-10 text-amber-400 shrink-0"/>
      <p className="shrink-0">Advanced Equipment</p>
      <ImDiamonds className="size-10 text-amber-400 shrink-0"/>
      <p className="shrink-0">1200+ Member Transformed</p>
      <ImDiamonds className="size-10 text-amber-400 shrink-0"/>
      <p className="shrink-0">Certified Trainers</p>
      <ImDiamonds className="size-10 text-amber-400 shrink-0"/>
      <p className="shrink-0">15+ Years Experience</p>
    </div>
  </div>
  </section>
  )
}

export default Hero