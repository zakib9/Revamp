import CustomButton from "../CustomButton"



const Services = () => {
  return (
    <section id="services" className="scroll-mt-24 h-screen bg-primary">
    <div className=" bg-linear-to-l from-secondary/25
     to-secondary/5 h-full w-full pt-10">
    <div className=" w-2/3 mx-auto grid grid-cols-2 grid-rows-6 items-center
      h-full ">
        <p className=" col-span-2 row-span-1 bg-secondary
         text-primary px-4 
        rounded-full border border-primary w-fit">Services</p>
    <div className=" col-span-2 flex justify-between
     row-span-1 pb-10">
        <p className=" w-1/2 leading-18 uppercase text-6xl text-white 
        font-bold">Services that
         <span className=" text-secondary"> Match </span>your goal</p>
         <p className=" pt-2 w-1/2 font-semibold text-white text-xl ">We understand that every fitness journey
         is unique, and what works for one person may not work for another.
          That’s why we provide a wide range of services tailored to different
           goals, lifestyles, and fitness levels</p>
      </div>
      
     <div className=" row-span-3  col-span-2 grid gap-4 grid-cols-2 h-full">
      <div className=" h-full col-span-1 rounded-2xl bg-blue-200"></div>
      <div className=" h-full col-span-1 rounded-2xl bg-blue-900"></div>
     </div>
     <div className=" row-span-1 col-span-2 flex mx-auto gap-4">
     <CustomButton  className=" py-1 rotate-180" bgColor="bg-secondary" bgHover="bg-primary"/>
     <CustomButton  className=" py-1" bgColor="bg-secondary" bgHover="bg-primary"/>
     </div>
     </div>
     </div>
  </section>
  )
}

export default Services