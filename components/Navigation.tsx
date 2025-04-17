export default function Navigation() {
    const navItems = [
      { name: 'About Us', href: '#about' },
      { name: 'Projects', href: '#projects' },
      { name: 'News', href: '#news' },
      { name: 'Contact', href: '#contact' },
    ]
  
    return (
      <nav>
        <ul className="flex space-x-6">
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
    )
  }