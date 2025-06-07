'use client'
import React, { useState } from 'react'
import { Menu, X, Play, ArrowRight, Zap, FileText, Clock } from 'lucide-react'

const navigation = [
  { name: 'Convert', href: '#convert' },
  { name: 'About us', href: '#about' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact Us', href: '#contact' },
]

const features = [
  { icon: Zap, title: 'Instant Conversion', desc: 'Convert videos to articles in seconds' },
  { icon: FileText, title: 'Quality Content', desc: 'AI-powered article generation' },
  { icon: Clock, title: 'Save Time', desc: 'No more manual transcription' },
]

function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      {/* Navbar */}
      <header className="relative z-50 py-4 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/80 backdrop-blur-lg border border-white/20 rounded-2xl px-6 py-4 flex items-center justify-between shadow-lg hover:shadow-xl transition-all duration-300">
            {/* Logo */}
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                TK
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Tulis Kami
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-medium text-gray-700 hover:text-blue-600 relative group transition-colors duration-300"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="fixed right-0 top-0 h-full w-80 bg-white/95 backdrop-blur-lg p-6 shadow-2xl transform transition-transform duration-300">
            <div className="flex items-center justify-between mb-8">
              <span className="font-bold text-xl text-gray-800">Tulis Kami</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="space-y-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 text-lg font-medium hover:text-blue-600 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="convert" className="relative z-10 px-4 lg:px-8 py-6 lg:py-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/70 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                      Ubah video mu
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                      menjadi{' '}
                    </span>
                    <span className="relative inline-block">
                      <span className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-extrabold">
                        artikel
                      </span>
                      <span className="absolute left-0 bottom-2 w-full h-4 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full -rotate-1 opacity-80 animate-pulse"></span>
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                      seketika
                    </span>
                  </h1>

                  <p className="text-xl text-gray-600 leading-relaxed">
                    Tanpa Pusing Tanpa Ribet, buat artikel mu jadi lebih mudah dengan{' '}
                    <span className="font-semibold text-blue-600">tuliskami</span>
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    Try Now
                  </button>
                  <button className="group text-gray-700 font-semibold text-lg flex items-center justify-center gap-2 px-6 py-4 hover:text-blue-600 transition-colors duration-300">
                    Learn More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Feature Pills */}
                <div className="flex flex-wrap gap-3 pt-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-white/80 backdrop-blur-sm border border-white/40 rounded-full px-4 py-2 flex items-center gap-2 hover:shadow-md transition-all duration-300 group"
                    >
                      <feature.icon className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm font-medium text-gray-700">{feature.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image/Visual */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative group">
                  {/* Floating Cards Animation */}
                  <div className="relative w-80 h-96 lg:w-96 lg:h-[450px]">
                    {/* Main Article Preview */}
                    <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl p-6 group-hover:scale-105 transition-all duration-500 border border-gray-100">
                      <div className="space-y-4">
                        {/* Header */}
                        <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"></div>
                          <span className="font-semibold text-gray-800">Article Preview</span>
                        </div>

                        {/* Content Lines */}
                        <div className="space-y-3">
                          <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-100 rounded-full"></div>
                          <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-100 rounded-full w-4/5"></div>
                          <div className="h-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full w-3/4"></div>
                          <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-100 rounded-full w-5/6"></div>
                        </div>

                        {/* Image Placeholder */}
                        <div className="h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                          <FileText className="w-12 h-12 text-blue-500" />
                        </div>

                        {/* More Content */}
                        <div className="space-y-2">
                          <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-100 rounded-full"></div>
                          <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-100 rounded-full w-3/4"></div>
                          <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-100 rounded-full w-5/6"></div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Video Icon */}
                    <div className="absolute -top-6 -left-6 bg-gradient-to-r from-red-500 to-pink-500 text-white p-4 rounded-2xl shadow-xl animate-bounce">
                      <Play className="w-6 h-6" />
                    </div>

                    {/* Floating Arrow */}
                    <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-gradient-to-r from-green-500 to-blue-500 text-white p-3 rounded-full shadow-xl animate-pulse">
                      <ArrowRight className="w-5 h-5" />
                    </div>

                    {/* Floating Success Badge */}
                    <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-xl shadow-xl text-sm font-semibold animate-pulse">
                      ✨ Done!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero