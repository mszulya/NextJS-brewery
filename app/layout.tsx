import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from 'next/image'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: 'BREWERY',
    description: "Generated by Zulfiia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="bg-gray-900 text-white min-h-screen flex flex-col antialiased">
          <header className="bg-gray-800 shadow-md">
              <div className="max-w-7xl mx-auto px-4">
                  <nav className="flex items-center bg-gray-800 px-6 h-14 space-x-8 shadow-md">
                      <ul className="flex items-center bg-gray-800 px-6 h-14 space-x-8 shadow-md">
                          <Image
                              aria-hidden
                              src="/logo.png"
                              alt="Logo icon"
                              width={25}
                              height={25}
                          />
                          <li>
                              <a
                                  href="/"
                                  className="text-white font-medium hover:text-blue-400 transition-colors duration-200 border-b-2 border-transparent hover:border-blue-500"
                                  aria-current="page"
                              >
                                  Home
                              </a>
                          </li>
                          <li>
                              <a href="/table" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 border-b-2 border-transparent hover:border-blue-500">
                                  Table
                              </a>
                          </li>
                      </ul>
                  </nav>
              </div>
          </header>
          <main className="max-w-4xl mx-auto w-full px-4 py-6 flex-grow">{children}</main>
          <footer className="bg-gray-800 text-sm text-gray-300 py-4 flex flex-wrap items-center justify-center gap-6 border-t border-gray-700">
              <p className="flex items-center gap-2">
                  <Image
                      aria-hidden
                      src="/file.svg"
                      alt="File icon"
                      width={16}
                      height={16}
                  />
                  (c)Zulfiia
              </p>
              <p className="flex items-center gap-2">
                  <Image
                      aria-hidden
                      src="/cell.svg"
                      alt="Phone icon"
                      width={24}
                      height={24}
                  />
                  0410277571
              </p>
              <p className="flex items-center gap-2">
                  <Image
                      aria-hidden
                      src="/globe.svg"
                      alt="Globe icon"
                      width={16}
                      height={16}
                  />
                  sul.zulya@gmail.com
              </p>
          </footer>
      </body>
    </html>
  )
}
