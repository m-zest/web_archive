import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface EmailSearchFormProps {
  onSearch: (emailId: string) => void;
  isLoading: boolean;
}

const EmailSearchForm: React.FC<EmailSearchFormProps> = ({ onSearch, isLoading }) => {
  const [emailId, setEmailId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailId.trim()) {
      onSearch(emailId.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto">
      <div className="relative flex items-center">
        <input
          type="text"
          value={emailId}
          onChange={(e) => setEmailId(e.target.value)}
          placeholder="Enter an email ID (e.g. EMAIL123)"
          className="w-full p-4 pr-12 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          disabled={isLoading}
        />
        <button
          type="submit"
          className={`absolute right-2 p-2 rounded-lg text-white ${
            isLoading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
          } transition-colors`}
          disabled={isLoading || !emailId.trim()}
        >
          <Search className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
};

export default EmailSearchForm;