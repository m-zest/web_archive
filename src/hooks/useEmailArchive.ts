import { useState, useEffect } from 'react';
import { fetchEmail } from '../services/emailService';
import { HistoryEntry } from '../types';

const MAX_HISTORY_LENGTH = 10;

export function useEmailArchive() {
  const [emailId, setEmailId] = useState<string | null>(null);
  const [emailContent, setEmailContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<HistoryEntry[]>(() => {
    const savedHistory = localStorage.getItem('emailArchiveHistory');
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  useEffect(() => {
    localStorage.setItem('emailArchiveHistory', JSON.stringify(history));
  }, [history]);

  const fetchEmailContent = async (id: string) => {
    setEmailId(id);
    setIsLoading(true);
    setError(null);
    
    try {
      const content = await fetchEmail(id);
      setEmailContent(content);
      
      setHistory(prevHistory => {
        const filteredHistory = prevHistory.filter(item => item.url !== id);
        const newHistory = [
          { url: id, timestamp: Date.now() },
          ...filteredHistory
        ].slice(0, MAX_HISTORY_LENGTH);
        
        return newHistory;
      });
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to fetch email');
      setEmailContent(null);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    emailId,
    emailContent,
    isLoading,
    error,
    history,
    fetchEmailContent
  };
}