# 🎓 ScholarConnect - Online Learning Platform

<div align="center">

![ScholarConnect](https://img.shields.io/badge/ScholarConnect-E--Learning-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite)

A modern, feature-rich online learning platform designed for college students and lifelong learners. Built with cutting-edge web technologies to deliver an exceptional educational experience.

[Features](#-features) • [Tech Stack](#-technology-stack) • [Quick Start](#-quick-start) • [Documentation](#-documentation)

</div>

---

## ✨ Features

### 🎨 Modern 3D UI Design
- **3D Textures & Lighting Effects** - Immersive visual experience with depth and dimension
- **Glass Morphism** - Modern frosted glass effects for a premium look
- **Animated Transitions** - Smooth hover effects and interactive elements
- **Neon Glow Effects** - Eye-catching accents that enhance user engagement

### 🤖 AI-Powered Chatbot
- **OpenAI Integration** - Intelligent assistant powered by GPT-3.5
- **Context-Aware Conversations** - Maintains conversation history for better responses
- **Real-Time Assistance** - Instant help with course information and platform navigation
- **Floating Chat Interface** - Accessible from any page with a beautiful UI

### 💾 Flexible Database Architecture
- **Supabase/PostgreSQL** - Production-ready database with real-time capabilities
- **localStorage Fallback** - Works seamlessly without backend setup
- **Automatic Data Migration** - Smooth transition between storage methods
- **Sample Data Included** - Pre-loaded courses and demo users

### 🔐 User Authentication
- **Email/Password Login** - Secure authentication system
- **Phone OTP Verification** - Alternative login method
- **User Registration** - Complete signup flow with validation
- **Session Management** - Persistent login state

### 📚 Course Management
- **Course Catalog** - Browse extensive library of courses
- **Advanced Search & Filters** - Find courses by category, level, or keyword
- **Course Details** - Comprehensive information with ratings and reviews
- **Enrollment Tracking** - Monitor progress and manage enrollments

### 📱 Responsive Design
- **Mobile-First Approach** - Optimized for all screen sizes
- **Touch-Friendly Interface** - Intuitive mobile interactions
- **Adaptive Layouts** - Seamless experience across devices
- **Performance Optimized** - Fast loading and smooth animations

---

## 🛠 Technology Stack

### Frontend Framework & Build Tools

#### **React 18.3** 
- **Purpose**: Core UI library for building interactive user interfaces
- **Why**: Component-based architecture, virtual DOM for performance, large ecosystem
- **Usage**: All UI components, state management, and user interactions

#### **TypeScript 5.5**
- **Purpose**: Type-safe JavaScript superset
- **Why**: Catches errors at compile-time, improves code maintainability, better IDE support
- **Usage**: Type definitions for all components, API responses, and data structures

#### **Vite 5.4**
- **Purpose**: Next-generation frontend build tool
- **Why**: Lightning-fast HMR (Hot Module Replacement), optimized builds, modern ES modules
- **Usage**: Development server, production builds, asset optimization

### UI Components & Styling

#### **shadcn-ui**
- **Purpose**: High-quality, accessible React component library
- **Why**: Built on Radix UI primitives, fully customizable, copy-paste components
- **Usage**: Buttons, cards, forms, dialogs, navigation menus, and more

#### **Tailwind CSS 3.4**
- **Purpose**: Utility-first CSS framework
- **Why**: Rapid UI development, consistent design system, small bundle size
- **Usage**: All styling, responsive design, custom animations, 3D effects

#### **tailwindcss-animate**
- **Purpose**: Animation utilities for Tailwind
- **Why**: Pre-built animations, smooth transitions, performance optimized
- **Usage**: Hover effects, loading states, page transitions

### Routing & State Management

#### **React Router DOM 6.26**
- **Purpose**: Declarative routing for React applications
- **Why**: Client-side navigation, nested routes, route protection
- **Usage**: Page routing, navigation between courses, protected dashboard routes

#### **TanStack Query (React Query) 5.56**
- **Purpose**: Powerful data synchronization for React
- **Why**: Automatic caching, background updates, error handling
- **Usage**: API data fetching, cache management, optimistic updates

### Database & Backend

#### **Supabase JS 2.39**
- **Purpose**: Open-source Firebase alternative with PostgreSQL
- **Why**: Real-time database, built-in authentication, row-level security
- **Usage**: User data, course information, enrollments, assignments storage

#### **PostgreSQL** (via Supabase)
- **Purpose**: Advanced open-source relational database
- **Why**: ACID compliance, complex queries, JSON support, scalability
- **Usage**: Structured data storage, relationships between users/courses/enrollments

### AI Integration

#### **OpenAI SDK 4.20**
- **Purpose**: Official SDK for OpenAI API integration
- **Why**: Type-safe API calls, streaming support, error handling
- **Usage**: Chatbot conversations, AI-powered course recommendations

### Form Handling & Validation

#### **React Hook Form 7.53**
- **Purpose**: Performant forms with easy validation
- **Why**: Minimal re-renders, built-in validation, small bundle size
- **Usage**: Login forms, signup forms, course filters

#### **Zod 3.23**
- **Purpose**: TypeScript-first schema validation
- **Why**: Type inference, runtime validation, error messages
- **Usage**: Form validation, API response validation, type safety

### Additional Libraries

#### **Lucide React 0.462**
- **Purpose**: Beautiful, customizable icon library
- **Usage**: Navigation icons, feature icons, UI indicators

#### **date-fns 3.6**
- **Purpose**: Modern JavaScript date utility library
- **Usage**: Date formatting, relative time, calendar displays

#### **Sonner 1.5**
- **Purpose**: Toast notification library
- **Usage**: Success messages, error notifications, user feedback

#### **Recharts 2.12**
- **Purpose**: Composable charting library
- **Usage**: Progress charts, analytics dashboards, data visualization

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd scholar-connect-online
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (Optional)
   
   Create a `.env` file in the root directory:
   ```env
   # Supabase Configuration (Optional - uses localStorage if not provided)
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

   # OpenAI Configuration (Optional - chatbot won't work without this)
   VITE_OPENAI_API_KEY=your_openai_api_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:8080`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` directory.

---

## 📖 Documentation

### Project Structure

```
scholar-connect-online/
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── ui/          # shadcn-ui components
│   │   └── ...          # Custom components (Navbar, Hero, ChatBot, etc.)
│   ├── pages/           # Route pages
│   ├── lib/             # Utilities and services
│   │   ├── db.ts        # Database operations
│   │   ├── supabase.ts  # Supabase client
│   │   ├── openai.ts    # OpenAI integration
│   │   └── initData.ts  # Sample data initialization
│   ├── hooks/           # Custom React hooks
│   ├── App.tsx          # Main app component
│   └── main.tsx        # Application entry point
├── public/              # Static assets
├── supabase-schema.sql  # Database schema
└── SETUP.md            # Detailed setup guide
```

### Key Features Implementation

#### 3D UI Effects
- Custom CSS classes in `src/index.css`
- Applied via Tailwind utility classes
- Hardware-accelerated transforms for performance

#### Database Integration
- Automatic fallback to localStorage if Supabase not configured
- Type-safe database operations
- Sample data initialization on first load

#### AI Chatbot
- Floating button interface
- Conversation history management
- Error handling and loading states

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_SUPABASE_URL` | No | Your Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | No | Your Supabase anonymous key |
| `VITE_OPENAI_API_KEY` | No | Your OpenAI API key for chatbot |

---

## 🎯 Use Cases

- **Educational Institutions** - Deploy for student course management
- **Online Learning Platforms** - Customizable course delivery system
- **Corporate Training** - Employee skill development programs
- **Personal Projects** - Learning management system template

---

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

### Code Style

- TypeScript strict mode enabled
- ESLint for code quality
- Prettier for code formatting (recommended)
- Component-based architecture

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

---

## 📧 Support

For support, email support@scholarconnect.com or open an issue in the repository.

---

<div align="center">

**Built with ❤️ for learners everywhere**

[⭐ Star this repo](https://github.com/yourusername/scholar-connect) • [🐛 Report Bug](../../issues) • [💡 Request Feature](../../issues)

</div>
