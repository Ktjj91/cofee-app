import { MdKeyboardArrowDown } from "react-icons/md";

export default function Header(){
    return (
       <header className="w-full h-screen bg-cover bg-center" style={{backgroundImage:"url('https://images.unsplash.com/photo-1595434091143-b375ced5fe5c?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
           <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center flex-col">
               <h1 className="text-white font-bold text-4xl md:text-6xl lg:text-8xl">COFFEE<span
                   className="text-[#F9BD93]">SHOW</span></h1>
               <p className="text-white font-bold m-2 text-center text-[12px] md:text-[14px] lg:text-[16px]">Eveillez
                   nos sens avec nos arômes exquis: le café qui reveille les passions</p>
               <a href="#produits"
                  className="text-white text-4xl cursor-pointer hover:scale-110 transition-all hover:text-[#f9bd93]">
                   <MdKeyboardArrowDown/>
               </a>
           </div>
       </header>
    )
}