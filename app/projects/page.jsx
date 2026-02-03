"use client";
import { useRouter } from "next/navigation";

const project_list = [
  { id: 1, title: "Project 1" },
  { id: 2, title: "Project 2" },
  { id: 3, title: "Project 3" },
  { id: 4, title: "Project 4" },
];

export default function Projects() {
  const router = useRouter();



  return (
    <div className="flex flex-col h-full  p-3">

      {/* Header */}
      <h1 className="text-zinc-300 font-bold text-2xl mb-4">
        Your Projects
      </h1>

      {/* Project Cards */}
      <div className="flex flex-wrap gap-4 overflow-y-scroll h-[82vh]">
        {project_list.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl p-6 shadow hover:shadow-lg 
               h-80 w-80 transition cursor-pointer flex flex-col justify-between"
            onClick={() => router.push(`/project-page/${project.id}`)}

          >
            <div>
              <p className="text-zinc-500 text-sm">ID: {project.id}</p> {/* Display ID */}
              <p className="font-semibold text-zinc-900 text-lg">{project.title}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
