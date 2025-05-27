export async function fetchEmail(emailId: string): Promise<string> {
  try {
    // For demo purposes, we're simulating an email fetch
    // In a production app, you would connect to your email service
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
    
    // Generate a mock email for demonstration
    const mockEmail = `
      <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
        <div style="background: #f8f9fa; padding: 20px;">
          <h2>Sample Email ${emailId}</h2>
          <p><strong>From:</strong> sender@example.com</p>
          <p><strong>To:</strong> recipient@example.com</p>
          <p><strong>Subject:</strong> Test Email ${emailId}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        </div>
        <div style="padding: 20px;">
          <p>This is a sample email body for demonstration purposes.</p>
          <p>The email ID you requested was: ${emailId}</p>
          <p>In a real application, this would contain the actual email content.</p>
        </div>
      </div>
    `;
    
    return mockEmail;
  } catch (error) {
    console.error('Error fetching email:', error);
    throw new Error('Failed to fetch email content');
  }
}

export function downloadEmail(html: string, emailId: string) {
  const blob = new Blob([html], { type: 'text/html' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  const filename = `email_${emailId.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.html`;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
}