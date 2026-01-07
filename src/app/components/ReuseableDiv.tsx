
interface CustomDivProps {
    title: string;
    content: string;
    className?: string;
  }
const CustomDiv: React.FC<CustomDivProps> = ({ title, content, className }) =>{

    return(
        <div className={`flex flex-col justify-evenly space-y-4
          items-start p-6 border
         border-stone-300 rounded-2xl transition-colors ${className}`}>
            <p className=" font-bold text-2xl uppercase text-primary">{ title }</p>
            <hr className=" w-3/4 text-stone-300" />
            <p className=" font-normal text-lg text-stone-500">{content}</p>
        </div>
    )
}

export default CustomDiv

