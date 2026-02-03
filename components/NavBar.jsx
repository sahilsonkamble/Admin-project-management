import Image from "next/image";

export default function NavBar() {
  return (
    <div className="w-full h-14 bg-white text-black px-4 flex justify-between items-center shadow-sm">
      
      {/* Title */}
      <h1 className="font-bold text-xl">Project Management</h1>

      {/* Logo */}
      <div className="relative h-10 w-10 rounded-full overflow-hidden bg-green-700 flex items-center justify-center">
        <Image
          src="/favicon.ico"
          alt="Logo Image"
          fill
          className="object-contain"
        />
      </div>

    </div>
  );
}
