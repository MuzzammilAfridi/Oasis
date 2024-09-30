import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold">Oasis</div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute top-16 left-0 w-full bg-white md:static md:flex md:items-center md:justify-end md:space-x-6 transition-all ease-in-out duration-300 md:w-auto`}>
          <li className="py-2 px-4 md:px-0 hover:text-blue-500">
            <a href="#">Home</a>
          </li>
          <li className="py-2 px-4 md:px-0 hover:text-blue-500">
            <a href="#">About</a>
          </li>
          <li className="py-2 px-4 md:px-0 hover:text-blue-500">
            <a href="#">Services</a>
          </li>
          <li className="py-2 px-4 md:px-0 hover:text-blue-500">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
