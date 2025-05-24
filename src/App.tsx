import React from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import WebsiteViewer from './components/WebsiteViewer';
import History from './components/History';
import { useWebArchive } from './hooks/useWebArchive';

function App() {
  const { 
    url,
    html, 
    isLoading, 
    error, 
    history, 
    fetchWebsiteContent 
  } = useWebArchive();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
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
      </main>
      
      <footer className="bg-slate-900 text-white py-4">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>© {new Date().getFullYear()} WebArchive Viewer. This is a demonstration project.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;