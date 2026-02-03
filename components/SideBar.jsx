import Link from "next/link";
import { FaHome, FaProjectDiagram, FaClipboardList, FaHeadset } from "react-icons/fa";

export default function SideBar() {
  return (
    <div className="w-full p-2 min-h-[calc(100vh-72px)] flex flex-col justify-between gap-2">

      {/* Top navigation list */}
      <div className="bg-zinc-200 h-2/3 w-full rounded-xl p-3 overflow-y-auto">
        <ul className="flex flex-col gap-2">
          
          <li className="p-2 rounded-xl hover:bg-zinc-300 transition">
            <Link href="/homepage" className="flex items-center gap-3 font-semibold text-zinc-800">
              <FaHome className="text-zinc-700" />
              HomePage
            </Link>
          </li>

          <li className="p-2 rounded-xl hover:bg-zinc-300 transition">
            <Link href="/projects" className="flex items-center gap-3 font-semibold text-zinc-800">
              <FaProjectDiagram className="text-zinc-700" />
              Your Projects
            </Link>
          </li>

          <li className="p-2 rounded-xl hover:bg-zinc-300 transition">
            <Link href="/applications" className="flex items-center gap-3 font-semibold text-zinc-800">
              <FaClipboardList className="text-zinc-700" />
              Your Applications
            </Link>
          </li>

          <li className="p-2 rounded-xl hover:bg-zinc-300 transition">
            <Link href="/applications" className="flex items-center gap-3 font-semibold text-zinc-800">
              <FaClipboardList className="text-zinc-700" />
              Your Tasks
            </Link>
          </li>
        </ul>
      </div>

      {/* Bottom support section */}
      <div className="bg-zinc-300 h-1/3 w-full rounded-xl p-3 gap-3">
      <ul  className="flex flex-col gap-2">
      <li  className="p-2 rounded-xl hover:bg-zinc-300 transition">
        <Link href="/applications" className="flex items-center gap-3 font-semibold text-zinc-800">
         <FaHeadset className="text-zinc-700" />
         Support
        </Link>
        
      </li>
      </ul>
       
      </div>

    </div>
  );
}
