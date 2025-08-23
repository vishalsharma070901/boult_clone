import React from "react";
import { Textarea } from "@/components/ui/textarea";
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
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // prevent newline
      if (message.trim()) {
        navigate(`/chat?message=${encodeURIComponent(message)}`);
      }
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="px-6 text-center max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-1 mb-8 border border-white/10">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm">Powered by Claude Sonnet 4</span>
          </div>

          <h1 className="text-5xl md:text-5xl font-bold  leading-tight">
           What should we build today?
            
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Create stunning apps & websites by chatting with AI.
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-all transform hover:scale-105">
              <Play className="w-5 h-5" />
              Start Building
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-white/30 hover:border-white/50 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-all backdrop-blur-sm hover:bg-white/5">
              <Github className="w-5 h-5" />
              View on GitHub
            </button>
          </div> */}
        </div>


        {/* <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-white/10 to-gray-300/10 rounded-2xl p-1 backdrop-blur-sm">
            <div className="bg-black/60 rounded-xl aspect-video flex items-center justify-center border border-white/10">
              <div className="text-center">
                <Play className="w-16 h-16 text-white mx-auto mb-4" />
                <p className="text-gray-400">Watch Bolt in Action</p>
              </div>
            </div>
          </div>


          <div className="absolute -top-4 -left-4 bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <Code2 className="w-6 h-6 text-white" />
          </div>
          <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
        </div> */}
      </section>
      <section className="px-6  max-w-6xl mx-auto">
        <Textarea placeholder="Type your message here."  className="w-[550px] h-[100px]" value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={handleKeyDown}/>
      </section>

      {/* Features Section */}
      {/* <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Everything you need to build
          </h2>
          <p className="text-xl text-gray-300">
            From idea to deployment in minutes, not hours
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all hover:bg-white/10">
            <div className="bg-white/10 rounded-lg p-3 w-fit mb-6">
              <Code2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">AI-Powered Coding</h3>
            <p className="text-gray-300 leading-relaxed">
              Write prompts and watch as Bolt generates complete applications
              with modern frameworks, styling, and functionality.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all hover:bg-white/10">
            <div className="bg-white/10 rounded-lg p-3 w-fit mb-6">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Instant Preview</h3>
            <p className="text-gray-300 leading-relaxed">
              See your changes in real-time with hot reloading and instant
              preview. No setup, no configuration required.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all hover:bg-white/10">
            <div className="bg-white/10 rounded-lg p-3 w-fit mb-6">
              <Layers className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Full-Stack Ready</h3>
            <p className="text-gray-300 leading-relaxed">
              Build complete applications with frontend, backend, and database
              integration. Deploy with one click.
            </p>
          </div>
        </div>
      </section> */}

      {/* Stats Section */}
      {/* <section className="px-6 py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-white mb-2">1M+</div>
              <div className="text-gray-300">Apps Created</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-gray-300">Developers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to start building?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of developers who are already building the future
            with Bolt.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-all transform hover:scale-105 justify-center">
              <Zap className="w-5 h-5" />
              Get Started Free
            </button>
            <button className="border border-white/30 hover:border-white/50 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-all backdrop-blur-sm justify-center hover:bg-white/5">
              <FileText className="w-5 h-5" />
              View Documentation
            </button>
          </div>
        </div>
      </section> */}

      {/* Footer */}
    </div>
  );
};

export default Hero;
