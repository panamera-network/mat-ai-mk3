"use client";

import { Home, Settings, BarChart, User, Info } from "lucide-react"; // pakai lucide icon sementara

export default function Sidebar() {
  return (
    <div className="w-[80px] h-full flex flex-col bg-[#ffffff33]">
  {/* Button 1 */}
  <div className="w-[80px] h-[120px] flex items-center justify-center border border-[#0d0f1a] bg-white/5 hover:bg-white/10 cursor-pointer">
    <span>1</span>
  </div>

  {/* Button 2 */}
  <div className="w-[80px] h-[120px] flex items-center justify-center border border-[#0d0f1a] bg-white/5 hover:bg-white/10 cursor-pointer">
    <span>2</span>
  </div>

  {/* Button 3 */}
  <div className="w-[80px] h-[120px] flex items-center justify-center border border-[#0d0f1a] bg-white/5 hover:bg-white/10 cursor-pointer">
    <span>3</span>
  </div>

  {/* Button 4 */}
  <div className="w-[80px] h-[120px] flex items-center justify-center border border-[#0d0f1a] bg-white/5 hover:bg-white/10 cursor-pointer">
    <span>4</span>
  </div>

  {/* Button 5 - full height leftover */}
  <div className="flex-1 w-[80px] border border border-[#0d0f1a] pointer-events-none">
  </div>
</div>

  );
}
