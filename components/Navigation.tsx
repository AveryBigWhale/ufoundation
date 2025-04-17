"use client"

import { useState } from 'react';

export default function Navigation() {
    const navItems = [
      { name: 'About Us', href: '#about' },
      { name: 'Projects', href: '#projects' },
      { name: 'News', href: '#news' },
      { name: 'Contact', href: '#contact' },
    ]
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  
    return (
    <header className="relative bg-ufoundationLightMain">
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