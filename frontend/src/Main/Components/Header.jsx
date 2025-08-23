import React from "react";
import { Box } from "lucide-react";
import {
  Zap,
  Code2,
  Sparkles,
  ArrowRight,
  Github,
  Twitter,
  Play,
  FileText,
  Globe,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    // <div className=' flex justify-between items-center p-4'>
    //     {/* logo */}
    //     <div >
    //         <Box className='w-10 h-10' />
    //     </div>
    //     {/* menu */}
    //     <div className='flex gap-4'>
    //         <Button variant='outline'>Sign In</Button>
    //         <Button>Get Started</Button>
    //     </div>
    // </div>

    <>
      <nav className="flex sticky top-0 z-50  items-center justify-between px-6 py-4 backdrop-blur-sm bg-black/20">
        <div className="flex items-center gap-2">
          <Box className="w-10 h-10" />
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline">Sign In</Button>
          <Button>Get Started</Button>
        </div>
      </nav>
    </>
  );
};

export default Header;
