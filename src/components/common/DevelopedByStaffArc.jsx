import Image from "next/image";
import { FiHeart } from "react-icons/fi";

export default function DevelopedByStaffArc() {
  return (
    <div className="flex items-center justify-center gap-2 text-sm text-white">
      <span>Made with</span>

      <FiHeart className="text-red-500" />

      <span>by</span>

      <Image
        src="/staffarc-logo.avif"
        alt="StaffArc"
        width={24}
        height={24}
        className="h-6 w-auto"
      />

      <a
        href="https://www.staffarc.in"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-orange-500 transition-all duration-300 hover:text-white"
      >
        StaffArc
      </a>
    </div>
  );
}