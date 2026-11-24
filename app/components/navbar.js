// components/Navbar.js
const Navbar = () => {
    // Sample navigation links
    const navLinks = [
      { text: 'About', href: '/about' },
      { text: 'Services', href: '/services' },
      { text: 'Contact', href: '/contact' },
    ];
  
    return (
    <nav className="bg-gray-800 text-white z-index-1000">
      <header className=" bg-ff4500 p-4 fixed w-full top-0 z-10">
        <div className="flex justify-between items-center">
          <a href="/" className="no-underline text-red-500 text-lg font-bold">
            TechHub
          </a>
          <nav className="flex justify-end items-center gap-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-red-500 no-underline px-4 py-2 border border-red-500 rounded-full transition-all duration-300 hover:bg-red-500 hover:text-white hover:shadow-lg"
              >
                {link.text}
              </a>
            ))}
          </nav>
        </div>
      </header>
      </nav>
    );
  };
  
  export default Navbar;
  