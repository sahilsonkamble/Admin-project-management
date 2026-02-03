import Image from "next/image";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2">
        {/* Left image */}
        <div className="hidden md:flex items-center justify-center bg-linear-to-br from-rose-600 to-pink-600">
          <div className="relative w-full h-full">
            <Image
              src="/Project.avif"
              alt="Project illustration"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right content */}
        <div className="p-8 flex items-center justify-center">{children}</div>
      </div>
    </div>
  );
}
