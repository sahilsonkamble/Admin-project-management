import Link from "next/link"
export default function SideBar() {
  return (
    <div className="bg-zinc-500 w-full p-2  text-black flex flex-col justify-between gap-2">
       <div className="bg-black h-2/3 w-full rounded-xl ">
            <ul className="text-black p-3">
                 <li className="bg-white m-2 p-2 h-10 font-semibold  rounded-xl" > <Link href="/homepage">HomePage</Link></li>
                <li className="bg-white m-2 p-2 h-10 font-semibold  rounded-xl" ><Link href="/projects">Your Projects </Link></li>
                <li className="bg-white m-2 p-2 h-10 font-semibold  rounded-xl">
                    <Link href="/applications">Your Applications</Link>
                </li>
               
            </ul>
       </div>
       <div className="bg-black  h-1/3 w-full rounded-xl ">

       </div>
    </div>)}