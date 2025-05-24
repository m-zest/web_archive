import React from 'react';
import { Archive } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center">
        <div className="flex items-center">
          <Archive className="h-8 w-8 mr-2" />
          <h1 className="text-xl font-bold">WebArchive</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;