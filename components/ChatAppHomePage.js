import React from 'react';
import { MessageCircle, Users, Shield, Zap, Check, Star } from 'lucide-react';
import { UserButton, SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function ChatAppHomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
 
    {/* //   Header
    //   <header className="container mx-auto px-6 py-4">
    //     <nav className="flex items-center justify-between">
    //       <div className="flex items-center space-x-2">
    //         <MessageCircle className="h-8 w-8 text-cyan-400" />
    //         <span className="text-2xl font-bold">ChatFlow</span>
    //       </div>
    //       <div className="hidden md:flex space-x-8">
    //         <Link href="#features" className="hover:text-cyan-400 transition-colors">home</Link>
    //         <Link href="#features" className="hover:text-cyan-400 transition-colors">about</Link>
    //         <Link href="/forum" className="hover:text-cyan-400 transition-colors">forum</Link>
    //         <Link href="/chat" className="hover:text-cyan-400 transition-colors">userchat</Link>
    //         <Link href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing</Link>
    //         <SignedOut>
    //       <SignInButton mode="modal">
    //         <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
    //           Sign In
    //         </button>
    //       </SignInButton>

    //       <SignUpButton mode="modal">
    //         <button className="ml-2 border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-50">
    //           Sign Up
    //         </button>
    //       </SignUpButton>
    //     </SignedOut>

    //     <SignedIn>
    //       <UserButton afterSignOutUrl="/" />
    //     </SignedIn>
    //       </div>
    //     </nav>
    //   </header> */}

      {/* Hero/Intro Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Connect Without Limits
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
            Experience the future of messaging with real-time communication, 
            advanced security, and seamless collaboration for teams and individuals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
              Start Chatting Free
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose ChatFlow?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Packed with powerful features to make your conversations more productive and enjoyable
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all transform hover:scale-105">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Lightning Fast</h3>
            <p className="text-gray-300 leading-relaxed">
              Messages delivered instantly with our optimized real-time infrastructure. 
              No delays, no waiting - just pure speed.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all transform hover:scale-105">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">End-to-End Security</h3>
            <p className="text-gray-300 leading-relaxed">
              Your conversations are protected with military-grade encryption. 
              Complete privacy and security you can trust.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all transform hover:scale-105">
            <div className="bg-gradient-to-r from-green-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Team Collaboration</h3>
            <p className="text-gray-300 leading-relaxed">
              Built for teams with channels, file sharing, video calls, 
              and advanced admin controls for seamless collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <div className="text-5xl font-bold mb-2">$0</div>
              <p className="text-gray-300">Perfect for personal use</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-green-400" />
                <span>Up to 10 conversations</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-green-400" />
                <span>Basic messaging</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-green-400" />
                <span>File sharing (10MB)</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-green-400" />
                <span>Mobile & desktop apps</span>
              </li>
            </ul>
            <button className="w-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 py-3 rounded-lg font-semibold transition-all">
              Get Started Free
            </button>
          </div>
          
          {/* Pro Plan */}
          <div className="bg-gradient-to-b from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-2xl p-8 border-2 border-cyan-400 relative transform scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                <Star className="h-4 w-4" />
                <span>Most Popular</span>
              </div>
            </div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <div className="text-5xl font-bold mb-2">$12</div>
              <p className="text-gray-300">For growing teams</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-green-400" />
                <span>Unlimited conversations</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-green-400" />
                <span>Advanced features</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-green-400" />
                <span>File sharing (100MB)</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-green-400" />
                <span>Video calls & screen sharing</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-green-400" />
                <span>Priority support</span>
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
              Start Pro Trial
            </button>
          </div>
          
          {/* Enterprise Plan */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <div className="text-5xl font-bold mb-2">$29</div>
              <p className="text-gray-300">For large organizations</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-green-400" />
                <span>Everything in Pro</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-green-400" />
                <span>Advanced admin controls</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-green-400" />
                <span>Unlimited file sharing</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-green-400" />
                <span>Custom integrations</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-green-400" />
                <span>24/7 dedicated support</span>
              </li>
            </ul>
            <button className="w-full border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900 py-3 rounded-lg font-semibold transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-white/10">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <MessageCircle className="h-8 w-8 text-cyan-400" />
            <span className="text-2xl font-bold">ChatFlow</span>
          </div>
          <p className="text-gray-400">
            © 2025 ChatFlow. All rights reserved. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}