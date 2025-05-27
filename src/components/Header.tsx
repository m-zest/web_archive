import React from 'react';
<<<<<<< HEAD
import { Archive, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="bg-slate-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
=======
import { Archive } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center">
>>>>>>> e4e4fdf72a1b1cb8840ec0e4a4009c3589d4e221
        <div className="flex items-center">
          <Archive className="h-8 w-8 mr-2" />
          <h1 className="text-xl font-bold">WebArchive</h1>
        </div>
<<<<<<< HEAD
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link 
                to="/webarchive" 
                className={`flex items-center ${location.pathname === '/webarchive' ? 'text-blue-400' : 'hover:text-blue-400'}`}
              >
                <Archive className="h-5 w-5 mr-1" />
                Web Archive
              </Link>
            </li>
            <li>
              <Link 
                to="/email" 
                className={`flex items-center ${location.pathname === '/email' ? 'text-blue-400' : 'hover:text-blue-400'}`}
              >
                <Mail className="h-5 w-5 mr-1" />
                Email Archive
              </Link>
            </li>
          </ul>
        </nav>
=======
>>>>>>> e4e4fdf72a1b1cb8840ec0e4a4009c3589d4e221
      </div>
    </header>
  );
};

export default Header;