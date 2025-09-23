# Lead Integration with Resend

## Current Setup

The textbook download form currently captures leads and stores them locally. To integrate with your Resend account, you have several options:

## Option 1: Simple Webhook with Resend (Recommended)

Create a simple webhook endpoint (using Vercel, Netlify Functions, or similar) that receives the lead data and sends emails via Resend.

### Example Webhook Code (Node.js):

```javascript
// webhook.js - Deploy this to Vercel/Netlify
import { Resend } from 'resend';

const resend = new Resend('your_resend_api_key');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { lead } = req.body;

  try {
    await resend.emails.send({
      from: 'website@adpd-ai.com',
      to: ['contact@adpd-ai.com'],
      subject: `ADPD³ Textbook Download - ${lead.name}`,
      html: `
        <h2>New ADPD³ Textbook Download</h2>
        <p><strong>Name:</strong> ${lead.name}</p>
        <p><strong>Email:</strong> ${lead.email}</p>
        <p><strong>Company:</strong> ${lead.company}</p>
        <p><strong>Role:</strong> ${lead.role}</p>
        <p><strong>Download Time:</strong> ${new Date(lead.timestamp).toLocaleString()}</p>
        <hr>
        <p><em>Lead captured from ADPD-AI.com textbook download form</em></p>
      `
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
```

### Update the Frontend:

Replace the current Method 1 in book.html with:

```javascript
// Method 1: Send to your webhook
fetch('https://your-webhook-url.vercel.app/api/webhook', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ lead: leadData })
}).catch(err => console.log('Webhook failed:', err));
```

## Option 2: Manual Lead Export (Current)

The current system stores leads locally and provides a CSV export function:

1. Open browser console on the book page
2. Run: `exportLeads()`
3. Download CSV file with all leads
4. Import into your CRM or manually send emails via Resend

## Option 3: EmailJS Integration

Use EmailJS to connect to your Resend account:

1. Sign up for EmailJS
2. Connect your Resend account
3. Update the frontend code to use EmailJS

## Option 4: Direct Resend Integration (Not Recommended)

⚠️ Not recommended for security reasons (exposes API keys in frontend code)

## Next Steps

1. Choose your preferred integration method
2. If using webhooks, deploy the webhook code
3. Update the webhook URL in book.html
4. Test the integration

## Current Lead Storage

Leads are stored in browser localStorage with this structure:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Corp",
  "role": "product-manager",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "source": "ADPD³ Textbook Download"
}
```

## Testing

You can test the current system by:
1. Filling out the download form
2. Checking browser console for lead data
3. Running `exportLeads()` to download CSV