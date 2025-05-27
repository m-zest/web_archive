import React from 'react';
import EmailSearchForm from '../components/EmailSearchForm';
import EmailViewer from '../components/EmailViewer';
import History from '../components/History';
import { useEmailArchive } from '../hooks/useEmailArchive';

const EmailArchivePage: React.FC = () => {
  const { 
    emailId,
    emailContent, 
    isLoading, 
    error, 
    history, 
    fetchEmailContent 
  } = useEmailArchive();

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-slate-800 mb-2">
        Email Archive Viewer
      </h1>
      <p className="text-gray-600 text-center mb-8">
        Enter an email ID to view its archived content
      </p>
      
      <div className="mb-8">
        <EmailSearchForm onSearch={fetchEmailContent} isLoading={isLoading} />
      </div>
      
      <EmailViewer 
        emailContent={emailContent} 
        isLoading={isLoading} 
        error={error} 
        emailId={emailId}
      />
      
      <History 
        history={history} 
        onSelectHistoryItem={fetchEmailContent} 
      />
    </div>
  );
};

export default EmailArchivePage;