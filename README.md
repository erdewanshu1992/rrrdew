# RRR Enterprise - Door-to-Door Fertilizer Delivery

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue)](https://rrrdew.netlify.app/)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Build](#build)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 📌 Overview

RRR Enterprise is a modern, responsive web application designed to assist farmers in exploring and inquiring about organic and chemical fertilizers. The platform offers convenient door-to-door delivery services, making it easier for agricultural communities to access quality fertilizers.

The application provides detailed information on various fertilizer types, their benefits, and a user-friendly interface for placing inquiries.

## ✨ Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Fertilizer Categories**: Comprehensive sections for organic and chemical fertilizers
- **Product Showcase**: Detailed information on different fertilizer products
- **Nutrient Information**: Educational content about essential nutrients
- **Contact Form**: Easy inquiry submission for customers
- **Hero Section**: Engaging landing page with key highlights
- **Navigation**: Smooth navigation with active link indicators
- **Footer**: Contact information and additional links

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion
- **Charts**: Recharts
- **State Management**: React Query (TanStack)
- **Deployment**: Netlify

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or bun

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/erdewanshu1992/rrrdew.git
   cd rrrdew
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install

   # Using yarn
   yarn install

   # Using bun
   bun install
   ```

3. **Start the development server**
   ```bash
   # Using npm
   npm run dev

   # Using yarn
   yarn dev

   # Using bun
   bun run dev
   ```

4. **Open your browser**

   The application will be running at `http://localhost:5173` (default Vite port).

## 💻 Usage

- Navigate through different sections using the navbar
- Explore fertilizer categories and products
- Learn about nutrients and their benefits
- Submit inquiries through the contact form
- View responsive design on various devices

## 🏗️ Build

To create a production build:

```bash
npm run build
```

This will generate an optimized `dist/` folder ready for deployment.

## 🌐 Deployment

The project is configured for automatic deployment on Netlify:

- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Trigger**: Automatic on push to main branch

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/          # Reusable UI components (shadcn/ui)
│   ├── HeroSection.tsx
│   ├── Navbar.tsx
│   ├── FertilizerCategories.tsx
│   └── ...          # Other feature components
├── pages/
│   ├── Index.tsx
│   └── NotFound.tsx
├── hooks/
├── lib/
├── assets/          # Images and static assets
└── App.tsx
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 📞 Contact

**RRR Enterprise**

- **Phone**: +91 8229068112
- **Email**: qadev432@gmail.com
- **Location**: Supaul, Bihar
- **Website**: [https://rrrdew.netlify.app/](https://rrrdew.netlify.app/)

For business inquiries or support, please reach out using the contact information above.

---

Made with ❤️ for farmers and agricultural communities.
