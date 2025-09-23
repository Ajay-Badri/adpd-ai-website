# GitHub Action Webhook Setup for Lead Capture

This guide shows you how to set up automated lead capture using GitHub Actions and your Resend account.

## Overview

When a user downloads the textbook, the system will:
1. Capture lead data on the website
2. Trigger a GitHub Action via repository dispatch
3. GitHub Action sends email via your Resend account
4. You receive instant lead notifications

## Setup Steps

### 1. Add Resend API Key to GitHub Secrets

1. Go to your GitHub repository: `https://github.com/Ajay-Badri/adpd-ai-website`
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `RESEND_API_KEY`
5. Value: Your Resend API key (starts with `re_`)
6. Click **Add secret**

### 2. Create GitHub Personal Access Token

1. Go to GitHub **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
2. Click **Generate new token (classic)**
3. Name: `ADPD Website Lead Capture`
4. Scopes: Check **repo** (full control of private repositories)
5. Click **Generate token**
6. Copy the token (starts with `ghp_` or `github_pat_`)

### 3. Update Frontend Code

In `book.html`, replace `github_pat_YOUR_TOKEN_HERE` with your actual token:

```javascript
'Authorization': 'Bearer github_pat_11ABCDEFGH_EXAMPLE123456789'
```

**Security Note**: Since this is a public repository, consider using a more secure approach (see Alternative Setup below).

### 4. Test the System

1. Push the changes to GitHub
2. Visit your website and try downloading the textbook
3. Check **Actions** tab in your GitHub repository
4. You should see a "Lead Capture via Resend" workflow run
5. Check your email for the lead notification

## Alternative Setup (More Secure)

Instead of putting the GitHub token in the frontend code, use a simple proxy:

### Option A: Use GitHub Codespaces/Actions only for logged-in users

Create a simple form that requires users to authenticate with GitHub first.

### Option B: Use a serverless function

Deploy a simple serverless function that accepts the lead data and triggers the GitHub Action.

### Option C: Use a webhook service

Use a service like Zapier or Make.com to receive the webhook and trigger GitHub Actions.

## File Structure

```
.github/
└── workflows/
    └── lead-capture.yml    # GitHub Action that sends emails

book.html                   # Frontend form that triggers the action
```

## Monitoring

You can monitor the system by:

1. **GitHub Actions**: Check the Actions tab for workflow runs
2. **Browser Console**: Check for success/error messages
3. **Email**: Receive lead notifications in your inbox
4. **CSV Export**: Still available as backup via `exportLeads()`

## Troubleshooting

### No emails received
- Check GitHub Actions logs for errors
- Verify Resend API key is correct
- Check spam folder

### GitHub Action not triggering
- Verify GitHub token has correct permissions
- Check browser console for API errors
- Ensure repository dispatch event type matches

### Rate limits
- GitHub API has rate limits for repository dispatches
- Consider implementing throttling for high traffic

## Benefits of This Approach

✅ **Free**: Uses GitHub's infrastructure
✅ **Reliable**: GitHub Actions are highly available
✅ **Secure**: API keys stored in GitHub Secrets
✅ **Scalable**: Can handle reasonable traffic volumes
✅ **Integrated**: Uses your existing GitHub repository
✅ **Trackable**: Full logs and monitoring via GitHub Actions

## Next Steps

1. Set up the GitHub secrets and token
2. Update the frontend code with your token
3. Test the complete flow
4. Monitor the Actions tab for successful runs
5. Start receiving automated lead notifications!

## Security Considerations

- Keep your GitHub token secure
- Consider using environment-specific tokens
- Monitor GitHub Actions usage for any unusual activity
- Regularly rotate your Resend API key