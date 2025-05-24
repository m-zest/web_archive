import React from 'react';
import HistoryItem from './HistoryItem';
import { HistoryEntry } from '../types';

interface HistoryProps {
  history: HistoryEntry[];
  onSelectHistoryItem: (url: string) => void;
}

const History: React.FC<HistoryProps> = ({ history, onSelectHistoryItem }) => {
  if (history.length === 0) {
    return null;
  }

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-3">Recent Searches</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {history.map((entry) => (
          <HistoryItem
            key={entry.timestamp}
            url={entry.url}
            timestamp={entry.timestamp}
            onSelect={onSelectHistoryItem}
          />
        ))}
      </div>
    </div>
  );
};

export default History;