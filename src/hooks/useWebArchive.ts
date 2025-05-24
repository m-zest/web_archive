import { useState, useEffect } from 'react';
import { fetchWebsite } from '../services/proxyService';
import { HistoryEntry } from '../types';

// Max number of history entries to store
const MAX_HISTORY_LENGTH = 10;

export function useWebArchive() {
  const [url, setUrl] = useState<string | null>(null);
  const [html, setHtml] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<HistoryEntry[]>(() => {
    // Initialize history from localStorage if available
    const savedHistory = localStorage.getItem('webArchiveHistory');
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  // Save history to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('webArchiveHistory', JSON.stringify(history));
  }, [history]);

  const fetchWebsiteContent = async (targetUrl: string) => {
    setUrl(targetUrl);
    setIsLoading(true);
    setError(null);
    
    try {
      const content = await fetchWebsite(targetUrl);
      setHtml(content);
      
      // Add to history
      setHistory(prevHistory => {
        // Remove if already exists (to avoid duplicates)
        const filteredHistory = prevHistory.filter(item => item.url !== targetUrl);
        
        // Add new entry at the beginning
        const newHistory = [
          { url: targetUrl, timestamp: Date.now() },
          ...filteredHistory
        ].slice(0, MAX_HISTORY_LENGTH); // Keep only the most recent entries
        
        return newHistory;
      });
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to fetch website');
      setHtml(null);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    url,
    html,
    isLoading,
    error,
    history,
    fetchWebsiteContent
  };
}