"use client"
import React from "react";
import { Briefcase } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Application_card() {
  const router =  useRouter()
  return (
    <div className="bg-white rounded-2xl p-6 w-full sm:w-72 
                    shadow-md hover:shadow-xl transition-all duration-300
                    flex flex-col gap-4">

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-zinc-100 
                      flex items-center justify-center">
        <Briefcase className="text-zinc-700" size={22} />
      </div>

      {/* Content */}
      <div>
        <h2 className="text-lg font-semibold text-zinc-900">
          Your Applications
        </h2>
        <p className="text-sm text-zinc-500 mt-1">
          Track and manage your submitted applications
        </p>
      </div>

      {/* Action */}
      <button className="mt-auto bg-zinc-900 text-white rounded-xl py-2
                         hover:bg-zinc-800 transition"
                         onClick={()=>{
                          router.push("/applications")
                         }}>
        View Applications
      </button>

    </div>
  );
}
