'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const navigation = [
  { name: 'Convert', href: '#convert' },
  { name: 'About us', href: '#' },
  { name: 'Price', href: '#Pricing' },
  { name: 'Contact Us', href: '#contact' },
]

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-blue-100 min-h-screen">
      {/* Navbar */}
      <header className="py-6 px-4">
        <div className="max-w-9xl mx-auto px-2">
          <div className="bg-white border border-blue-600 rounded-lg px-6 py-5 flex items-center justify-between shadow">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10">
                <Image src="/TulisKami.jpg" alt="Logo" width={100} height={100} />
              </div>
              <span className="font-bold text-lg text-black">Tulis Kami</span>
            </div>

            {/* Menu Desktop */}
            <div className="hidden md:flex space-x-6 font-semibold text-sm text-black">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="hover:text-blue-700">
                  {item.name}
                </a>
              ))}
            </div>

            {/* Burger Menu */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-gray-700"
              >
                <Bars3Icon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="md:hidden">
        <DialogPanel className="fixed inset-0 z-50 bg-white p-6">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-lg text-gray-800">Tulis Kami</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-700"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-700 text-base font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
        </DialogPanel>
      </Dialog>

      <section id="convert" className="px-4 py-12">
        <div className="max-w-7xl mx-auto bg-white border border-blue-600 rounded-md shadow-md p-8 grid md:grid-cols-2 gap-6 items-center">
          {/* Text */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-tight">
              Ubah video mu <br />
              menjadi{' '}
              <span className="relative inline-block">
                <span className="relative z-10">artikel</span>
                <span className="absolute left-0 bottom-1 w-full h-2 bg-yellow-300 z-0"></span>
              </span>{' '}
              <br />
              seketika
            </h1>

            <p className="mt-6 text-gray-700 text-lg">
              Tanpa Pusing Tanpa Ribet, buat artikel mu jadi lebih mudah dengan tuliskami
            </p>

            <div className="mt-8 flex gap-4 items-center">
              <a
                href="#"
                className="bg-black text-white font-bold text-sm px-5 py-2.5 rounded-md shadow hover:bg-gray-800"
              >
                Try now
              </a>
              <a
                href="#"
                className="text-gray-800 font-semibold text-sm flex items-center gap-1 hover:underline"
              >
                Learn More <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <Image
              src="/Artikel.png"
              alt="Preview Artikel"
              width={300}
              height={400}
              className="rounded-xl border"
            />
          </div>
        </div>
      </section>
    </div>

  )
}
