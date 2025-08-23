import React from 'react'
import { Zap, Twitter, Github } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="px-6 border-t border-white/5">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Zap className="w-6 h-6 text-white" />
          <span className="text-xl font-bold">Bolt</span>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      <div className="mt-8 pt-8 border-t border-white/5 text-center text-gray-400">
        <p>&copy; 2024 Bolt. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer