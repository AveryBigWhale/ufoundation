"use client"

import { useState } from 'react';
import Link from 'next/link'
import ImageLoader from '../components/ImageLoader';

export default function Navigation() {
    const navItems = [
        { name: '關於我們', href: '/about' },
        { name: '專案計畫', href: '/projects' },
        { name: '最新消息', href: '/news' },
    ]
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  
    return (
    <header className="relative bg-ufoundationLightMain">
        <div className={`flex items-center ${isOpen ? 'hidden' : ''}`}>
            <div className="mr-2 relative w-16 h-16 rounded-full overflow-hidden shadow-lg"
                style={{
                backgroundImage: `url(${ImageLoader({ src: '/icon-1.svg' })})`,
                backgroundSize: 'cover',
                // // backgroundSize: `${windowSize.width}px ${windowSize.height}px`,
                backgroundPosition: 'center',
            }} />
            <Link href="/" className="text-2xl font-bold text-primary">
                    U Foundation
            </Link>
        </div>
        <nav>
                
            <ul className="flex space-x-6 bg-ufoundationLightMain">
            {navItems.map((item) => (
                <li key={item.name}>
                <a 
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                    {item.name}
                </a>
                </li>
            ))}
            </ul>
        </nav>
        <div className="md:hidden">
            <button onClick={toggleMenu} className="text-intertidalDarkMain text-4xl w-25 h-25 flex justify-center items-center">
                {isOpen ? '✖️' : '☰'}
            </button>
        </div>
    </header>
      
    )
  }