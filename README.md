# KachaBazer

**Tagline:** Track your local market prices, anytime, anywhere.

## Live URL
https://your-live-site.com

## Tech stack
- Frontend: Next.js, TypeScript, Tailwind CSS, Framer Motion, Recharts
- Backend: Node, Express, MongoDB, Mongoose, JWT
- Auth: Firebase (Google social login) + JWT
- Payment: Stripe
- Image hosting: Cloudinary

## Key features
- Daily market price listings (approved updates only)
- Role-based dashboards (Admin / Vendor / User)
- Google social login + JWT auth
- Recharts price comparisons
- Stripe payments + order saving
- Vendor ads + carousel
- Watchlist, reviews, and comments
- Responsive: mobile/tablet/desktop
- Environment variables for keys

## Setup
### Frontend
1. cd frontend
2. cp .env.local.example .env.local
3. npm install
4. npm run dev

### Backend
1. cd backend
2. cp .env.example .env
3. npm install
4. npm run dev

## Deployment notes
- Add your frontend domain to Firebase Authorized domains.
- Use MongoDB Atlas and set MONGO_URI in backend env.
- Configure backend CORS to allow frontend domain.