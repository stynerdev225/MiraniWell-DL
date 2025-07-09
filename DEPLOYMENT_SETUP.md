# Vercel Deployment Setup Guide

## Issue: Database Configuration Missing

Your deployment is skipping database setup because it's not detecting PostgreSQL. Here's how to fix it:

## Step 1: Set up PostgreSQL Database

### Option A: Neon (Recommended - Free tier available)
1. Go to [neon.tech](https://neon.tech)
2. Create a free account
3. Create a new project
4. Copy the connection string (looks like: `postgresql://username:password@host/database`)

### Option B: Vercel Postgres
1. In your Vercel dashboard, go to your project
2. Click "Storage" tab
3. Create a new Postgres database
4. Copy the connection string

## Step 2: Configure Vercel Environment Variables

In your Vercel dashboard:

1. Go to your project settings
2. Click "Environment Variables"
3. Add these variables:

```
DATABASE_URL=postgresql://your_connection_string_here
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_Y2FsbS1tb25rZmlzaC00Ny5jbGVyay5hY2NvdW50cy5kZXYk
CLERK_SECRET_KEY=sk_test_PuxkxnYOGaTqoucmIe73HyAdRzpU0BmhKu3LxKsOM5
GOOGLE_GEMINI_API_KEY=your_google_gemini_api_key
STRIPE_API_KEY=your_stripe_api_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
NEXT_PUBLIC_APP_URL=https://your-vercel-domain.vercel.app
```

## Step 3: Redeploy

After setting the environment variables:

```bash
vercel --prod
```

## Step 4: Verify Database Setup

The build logs should now show:
```
🚀 Starting production database setup...
📊 Connecting to production database...
✅ Database connection successful
🗄️ Database tables created successfully
```

## Quick Fix Command

Run this to redeploy with proper environment variables:

```bash
# Set your DATABASE_URL first in Vercel dashboard, then:
vercel --prod
```

## Troubleshooting

If you still see "Skipping database setup - not using PostgreSQL":
1. Verify DATABASE_URL starts with "postgresql://" or "postgres://"
2. Check environment variables are set in Vercel dashboard
3. Redeploy after setting variables

Your app is building successfully - it just needs the database configured!