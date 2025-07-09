# Miriani Well - AI-Powered Wellness Platform

![Miriani Well - Personalized AI-powered wellness platform](/.github/images/img_main.png "Miriani Well - Personalized AI-powered wellness platform")

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/StynerDev/miriani-well-wellness-platform/blob/main/LICENSE "GitHub license")
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/StynerDev/miriani-well-wellness-platform/commits/main "Maintenance")
[![Developer](https://img.shields.io/badge/Developer-StynerDev-blue.svg)](https://styner.dev "Developer")

## About Miriani Well

**Miriani Well** is a personalized AI-powered wellness platform designed to support your mental health and spiritual growth journey. It combines ancient healing wisdom with modern technology to provide a comprehensive wellness experience.

**Client:** Dr. Uzo Nwankpa  
**Developer:** StynerDev - CTO & Full-Stack Developer | Mobile & Cross-Platform Apps | Blockchain (ICP) & COBOL Specialist  
**Website:** [styner.dev](https://styner.dev)

## Features

- 🧠 **AI-Powered Personalization**: Tailored wellness recommendations based on your unique needs
- 🌱 **Spiritual Growth Tracking**: Monitor your spiritual journey with comprehensive analytics
- 💆‍♀️ **Mental Health Support**: Interactive tools and resources for mental wellness
- 🏆 **Achievement System**: Gamified wellness journey with progress tracking
- 📱 **Responsive Design**: Seamless experience across all devices
- 🔐 **Secure & Private**: Your wellness data is protected with enterprise-grade security
- 💳 **Flexible Subscriptions**: Multiple tiers to suit your wellness needs
- 🌍 **Ancient Wisdom**: Modern implementation of time-tested healing practices
- 🎯 **Personalized Recommendations**: AI-driven suggestions for optimal wellness
- 📊 **Progress Analytics**: Detailed insights into your wellness journey

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Radix UI Components
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Clerk (Secure user management)
- **Payments**: Stripe (Subscription management)
- **AI Integration**: Advanced personalization algorithms
- **Deployment**: Vercel (Production-ready hosting)
- **Audio/Media**: React Use Sound for immersive experiences
- **State Management**: Zustand
- **Animations**: Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- PostgreSQL database
- Clerk account for authentication
- Stripe account for payments

### Installation

1. Clone the repository:

```bash
git clone https://github.com/StynerDev/miriani-well-wellness-platform.git
cd miriani-well-wellness-platform
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

4. Configure your environment variables in `.env.local`:

```env
DATABASE_URL=your_postgresql_connection_string
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
STRIPE_API_KEY=your_stripe_api_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

5. Run database migrations:

```bash
npm run db:push
```

6. Seed the database:

```bash
npm run db:seed
```

7. Start the development server:

```bash
npm run dev
```

Visit `http://localhost:3000` to experience Miriani Well.

## Project Structure

```
miriani-well-wellness-platform/
├── actions/          # Server actions for wellness data
├── app/              # Next.js app directory
│   ├── (auth)/       # Authentication pages
│   ├── (main)/       # Main wellness platform
│   ├── (marketing)/  # Landing and marketing pages
│   └── admin/        # Admin dashboard
├── components/       # Reusable React components
├── config/           # Configuration files
├── db/               # Database schema and queries
├── lib/              # Utility functions and helpers
├── public/           # Static assets and media
├── scripts/          # Database seeding and utilities
└── store/            # Zustand state management
```

## Wellness Platform Features

### Core Wellness Modules

- **Mindfulness & Meditation**: Guided sessions and progress tracking
- **Spiritual Growth**: Personalized spiritual journey mapping
- **Mental Health Tools**: AI-powered mood tracking and recommendations
- **Progress Analytics**: Comprehensive wellness metrics and insights
- **Community Features**: Connect with like-minded wellness seekers

### AI-Powered Personalization

- Smart content recommendations based on your wellness goals
- Adaptive learning algorithms that evolve with your progress
- Personalized wellness plans created by advanced AI
- Predictive analytics for optimal wellness timing

## Development

### Contributing

We welcome contributions from developers passionate about wellness technology. Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run db:studio    # Open Drizzle Studio
npm run db:push      # Push database changes
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For technical support or questions about Miriani Well:

- **Developer**: StynerDev - [contact@styner.dev](mailto:contact@styner.dev)
- **Website**: [styner.dev](https://styner.dev)
- **Issues**: [GitHub Issues](https://github.com/StynerDev/miriani-well-wellness-platform/issues)

## Client Information

**Dr. Uzo Nwankpa**  
**Miriani Well**  
*Personalized AI-powered wellness platform for mental health and spiritual growth*

## About the Developer

**StynerDev** is a CTO & Full-Stack Developer specializing in:

- Mobile & Cross-Platform Applications
- Blockchain Development (ICP Specialist)
- COBOL Systems Integration
- AI-Powered Wellness Solutions
- Enterprise-Grade Security Implementation

Visit [styner.dev](https://styner.dev) for more information.

---

*Combining ancient healing wisdom with modern technology for your wellness journey.*

**Developed with ❤️ by [StynerDev](https://styner.dev) for Dr. Uzo Nwankpa**
