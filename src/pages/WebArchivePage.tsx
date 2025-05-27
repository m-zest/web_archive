import React from 'react';
import SearchForm from '../components/SearchForm';
import WebsiteViewer from '../components/WebsiteViewer';
import History from '../components/History';
import { useWebArchive } from '../hooks/useWebArchive';

const WebArchivePage: React.FC = () => {
  const { 
    url,
    html, 
    isLoading, 
    error, 
    history, 
    fetchWebsiteContent 
  } = useWebArchive();

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-slate-800 mb-2">
        Website Archive Viewer
      </h1>
      <p className="text-gray-600 text-center mb-8">
        Enter a URL to view any website exactly as it appears online
      </p>
      
      <div className="mb-8">
        <SearchForm onSearch={fetchWebsiteContent} isLoading={isLoading} />
      </div>
      
      <WebsiteViewer 
        html={html} 
        isLoading={isLoading} 
        error={error} 
        url={url}
      />
      
      <History 
        history={history} 
        onSelectHistoryItem={fetchWebsiteContent} 
      />
    </div>
  );
};

export default WebArchivePage;