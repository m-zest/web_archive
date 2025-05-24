/**
 * Service to fetch website content through a proxy
 */
export async function fetchWebsite(url: string): Promise<string> {
  try {
    // For demo purposes, we're using a CORS proxy service
    // In a production app, you would use your own backend or edge function
    const corsProxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
    
    const response = await fetch(corsProxyUrl);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch website: ${response.status} ${response.statusText}`);
    }
    
    const html = await response.text();
    return html;
  } catch (error) {
    console.error('Error fetching website:', error);
    throw error;
  }
}

export function downloadWebpage(html: string, url: string) {
  // Create a blob from the HTML content
  const blob = new Blob([html], { type: 'text/html' });
  
  // Create a temporary link element
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  
  // Generate filename from URL
  const filename = url.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.html';
  link.download = filename;
  
  // Trigger download
  document.body.appendChild(link);
  link.click();
  
  // Cleanup
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
}