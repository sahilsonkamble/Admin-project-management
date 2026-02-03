"use client";
import { useParams } from "next/navigation";

export default function ProjectPage() {
  const params = useParams();
  const id = params.id; // dynamic [id] from URL

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Project ID: {id}</h1>
    </div>
    
  );
}
