"use client"
import { useRef } from "react";
import CustomButton from "./CustomButton";


const Slider: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scroll = (direction: "left" | "right") => {
        const container = containerRef.current;
        if (!container) return;
    
        const width = container.clientWidth + 16;
    
        container.scrollBy({
          left: direction === "right" ? -width : width,
          behavior: "smooth",
        });
      };
    return (
    <div className="grid-rows-4 row-span-4 h-full col-span-2 space-y-6 ">
         <div ref={containerRef} className=" h-4/5  col-span-2 grid gap-4 grid-cols-2
      overflow-hidden whitespace-nowrap scroll-smooth no-scrollbar">
      <div  className=" col-span-2  flex gap-4 
      items-center ">
        <div className=" min-h-full min-w-[calc(50%-8px)]
         bg-blue-200 rounded-2xl">1</div>
        <div className=" min-h-full min-w-[calc(50%-8px)]
         bg-blue-600 rounded-2xl">2</div>
        
        <div className=" min-h-full min-w-[calc(50%-8px)]
         bg-blue-200 rounded-2xl">3</div>
        <div className=" min-h-full min-w-[calc(50%-8px)]
         bg-blue-600 rounded-2xl">4</div>
         <div className=" min-h-full min-w-[calc(50%-8px)]
         bg-blue-200 rounded-2xl">5</div>
        <div className=" min-h-full min-w-[calc(50%-8px)]
         bg-blue-600 rounded-2xl">6</div>
         <div className=" min-h-full min-w-[calc(50%-8px)]
         bg-blue-200 rounded-2xl">7</div>
        <div className=" min-h-full min-w-[calc(50%-8px)]
         bg-blue-600 rounded-2xl">8</div>

         <div className=" min-h-full min-w-[calc(50%-8px)]
         bg-blue-200 rounded-2xl">1</div>
        <div className=" min-h-full min-w-[calc(50%-8px)]
         bg-blue-600 rounded-2xl">2</div>
        
        <div className=" min-h-full min-w-[calc(50%-8px)]
         bg-blue-200 rounded-2xl">3</div>
        <div className=" min-h-full min-w-[calc(50%-8px)]
         bg-blue-600 rounded-2xl">4</div>
         <div className=" min-h-full min-w-[calc(50%-8px)]
         bg-blue-200 rounded-2xl">5</div>
        <div className=" min-h-full min-w-[calc(50%-8px)]
         bg-blue-600 rounded-2xl">6</div>
         <div className=" min-h-full min-w-[calc(50%-8px)]
         bg-blue-200 rounded-2xl">7</div>
        <div className=" min-h-full min-w-[calc(50%-8px)]
         bg-blue-600 rounded-2xl">8</div>
      </div>
      
      
      
      
     </div>
     <div className=" row-span-1 col-span-2 justify-center flex mx-auto gap-4">
     <CustomButton onClick={() => scroll("right")}  className=" py-1 rotate-180" bgColor="bg-secondary" bgHover="bg-primary"/>
     <CustomButton onClick={() => scroll("left")} className=" py-1" bgColor="bg-secondary" bgHover="bg-primary"/>
     </div>
    </div>
    );
}

export default Slider