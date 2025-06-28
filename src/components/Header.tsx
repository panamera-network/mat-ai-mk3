// components/Header.tsx
import { Menu, User } from "lucide-react"; // lucide-react icon library

export default function Header() {
  return (
    <div className="app-header w-full h-[80px] flex items-center justify-between px-6">
      {/* Left: Hamburger */}
      <div className="flex items-center gap-4">
        <button className="text-white hover:text-cyan-400">
          <Menu size={28} />
        </button>
        <div className="text-white text-lg font-bold">MAT.AI</div>
      </div>

      {/* Right: Avatar */}
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
          <User className="text-white" size={20} />
        </div>
      </div>
    </div>
  );
}

