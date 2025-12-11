# React-js

## Environment variables

Create a `.env.local` file (or configure Render Environment Variables) with:
- `MONGO` (or `MONGODB_URI`) – MongoDB connection string
- `NEXTAUTH_SECRET` – random string for NextAuth
- `NEXTAUTH_URL` – full site URL, e.g. `https://your-service.onrender.com`
- `NEXT_PUBLIC_SITE_URL` – same as `NEXTAUTH_URL` for client-side use
- `GITHUB_ID` / `GITHUB_SECRET` – if using GitHub OAuth