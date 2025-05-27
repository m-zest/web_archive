import React from 'react';
import { AlertCircle, Mail, Download } from 'lucide-react';
import { downloadEmail } from '../services/emailService';

interface EmailViewerProps {
  emailContent: string | null;
  isLoading: boolean;
  error: string | null;
  emailId: string | null;
}

const EmailViewer: React.FC<EmailViewerProps> = ({ emailContent, isLoading, error, emailId }) => {
  if (isLoading) {
    return (
      <div className="w-full h-96 flex items-center justify-center bg-gray-100 rounded-lg">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading email...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full p-6 bg-red-50 border border-red-200 rounded-lg">
        <div className="flex items-center text-red-600 mb-2">
          <AlertCircle className="h-6 w-6 mr-2" />
          <h3 className="font-semibold">Error</h3>
        </div>
        <p className="text-red-700">{error}</p>
      </div>
    );
  }

  if (!emailContent && !emailId) {
    return (
      <div className="w-full h-96 flex items-center justify-center bg-gray-100 rounded-lg">
        <div className="text-center max-w-lg p-6">
          <Mail className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Enter an Email ID</h2>
          <p className="text-gray-500">
            Type an email ID in the search bar above to view its archived version.
          </p>
        </div>
      </div>
    );
  }

  const handleDownload = () => {
    if (emailContent && emailId) {
      downloadEmail(emailContent, emailId);
    }
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gray-100 p-2 border-b border-gray-200 flex justify-between items-center">
        <p className="text-sm text-gray-600 truncate">Email ID: {emailId}</p>
        {emailContent && emailId && (
          <button
            onClick={handleDownload}
            className="flex items-center px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            <Download className="h-4 w-4 mr-1" />
            Save
          </button>
        )}
      </div>
      <iframe
        srcDoc={emailContent || ''}
        className="w-full h-[800px] border-0"
        sandbox="allow-same-origin"
        title="Email Preview"
      />
    </div>
  );
};

export default EmailViewer;