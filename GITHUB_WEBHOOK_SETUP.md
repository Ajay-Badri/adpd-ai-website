# GitHub Issues-Based Lead Capture Setup

This guide shows you how to set up automated lead capture using GitHub Issues, Actions, and your Resend account.

## Overview

When a user downloads the textbook, the system will:
1. Capture lead data on the website
2. Create a GitHub issue with the lead information
3. GitHub Action automatically processes the issue
4. Email sent via your Resend account
5. Issue automatically closed after processing

## Setup Steps

### 1. Add Resend API Key to GitHub Secrets

1. Go to your GitHub repository: `https://github.com/Ajay-Badri/adpd-ai-website`
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `RESEND_API_KEY`
5. Value: Your Resend API key (starts with `re_`)
6. Click **Add secret**

### 2. No Additional Setup Required!

✅ **No tokens needed** - This approach uses GitHub's public API for issue creation
✅ **Fully secure** - API keys stored safely in GitHub Secrets
✅ **Automatic processing** - Issues trigger the workflow automatically

### 3. Test the System

1. Push the changes to GitHub
2. Visit your website and try downloading the textbook
3. Check **Issues** tab in your GitHub repository - you should see a new issue created
4. Check **Actions** tab - you should see a "Lead Capture via Resend" workflow run
5. The issue should automatically close with a success comment
6. Check your email for the lead notification

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