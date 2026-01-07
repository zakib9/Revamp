import CustomButton from "../CustomButton"
import CustomDiv from "../ReuseableDiv"


const About = () => {
  return (
    <section id="about" className="grid grid-rows-7 w-4/6 mx-auto scroll-m-24">
    <div className="row-span-2 grid grid-cols-3 py-20 w-full">
      <div className=" col-span-1 space-y-10">
        <p className=" bg-secondary text-primary px-4 
        rounded-full border border-primary w-fit">About Us</p>
        <p className=" leading-18 uppercase text-6xl text-primary 
        font-bold">the 
          <span className=" text-secondary"> Power </span>
          behind your vision</p>
      </div>
      <div className=" col-span-2 flex flex-col gap-4
       text-primary text-xl font-semibold ">
        <p className=" w-4/5 self-end">Revamp is dedicated to helping you achieve your fitness 
          and wellness goals through expert coaching. Personalized 
          workout plans, and nutrition guidance</p>
          <div className="w-4/5 self-end flex gap-4">
            <CustomDiv className=" bg-secondary hover:bg-white" title="our vision" content="To inspire & impower 
            individuals to lead healthier, stronger & more fulfilling
             lives through fitness and wellness" />
            <CustomDiv className=" hover:bg-secondary" title="our mission" content="To empower individuals with
             effective fitness solutions that build strength, confidence, 
             and lasting healthy habits" />
          </div>
      </div>
    </div>
    <div className=" relative overflow-hidden row-span-3 rounded-2xl">
      <div className=" flex justify-center items-center w-full h-full absolute z-10 bg-secondary/10">
      <CustomButton bgColor="bg-white" bgHover="bg-primary" text="Play Video"/>
      </div>
    <img src="/assets/video-placeholder.jpeg" alt="" className=" absolute z-0" />
    </div>
    <div className=" row-span-1 flex space-x-4">
      <div className=" py-10 flex-col justify-evenly space-y-2 text-stone-500
       text-lg font-medium">
        <p className=" text-primary font-extrabold text-6xl">24/7</p>
        <p>Open access</p>
        <hr />
        <p>The gym is always open. Train on your sechedule</p>
      </div>
      <div className=" py-10 flex-col justify-evenly space-y-2 text-stone-500
       text-lg font-medium">
        <p className=" text-primary font-extrabold text-6xl">15+</p>
        <p>Years of excellence</p>
        <hr />
        <p>Over a decade of helping people achieve their fitness goal</p>
      </div>
      <div className=" py-10 flex-col justify-evenly space-y-2 text-stone-500
       text-lg font-medium">
        <p className=" text-primary font-extrabold text-6xl">100+</p>
        <p>Certified coaches</p>
        <hr />
        <p>Every trainer is personally certified and expert-led</p>
      </div>
      <div className=" py-10 flex-col justify-evenly space-y-2 text-stone-500
       text-lg font-medium">
        <p className=" text-primary font-extrabold text-6xl">50+</p>
        <p>Weekly classes</p>
        <hr />
        <p>From HIIT to Yoga find your perfect group challange</p>
      </div>
    </div>
  </section>
  )
}

export default About