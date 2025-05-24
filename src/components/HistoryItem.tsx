import React from 'react';
import { Clock, ExternalLink } from 'lucide-react';

interface HistoryItemProps {
  url: string;
  timestamp: number;
  onSelect: (url: string) => void;
}

const HistoryItem: React.FC<HistoryItemProps> = ({ url, timestamp, onSelect }) => {
  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div 
      className="p-3 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 cursor-pointer transition-colors flex justify-between items-center"
      onClick={() => onSelect(url)}
    >
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate">{url}</p>
        <div className="flex items-center mt-1 text-xs text-gray-500">
          <Clock className="h-3 w-3 mr-1" />
          <span>{formatTime(timestamp)}</span>
        </div>
      </div>
      <ExternalLink className="h-4 w-4 text-gray-400 flex-shrink-0" />
    </div>
  );
};

export default HistoryItem;