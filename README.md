# RestroWorks Website - Next.js + Payload CMS

A modern, multilingual restaurant website built with Next.js 15 and Payload CMS 3.0, featuring a flexible block-based content management system and responsive design.

## 🚀 Live Demo

**[View Live Demo →](https://your-demo-url.vercel.app)** *(Coming Soon)*

## 📋 Table of Contents

- [Features](#features)
- [Setup Instructions](#setup-instructions)
  - [Local Development](#local-development)
  - [Vercel Deployment](#vercel-deployment)
- [CMS Architecture](#cms-architecture)
- [Creating & Editing Content](#creating--editing-content)
- [Block System Guide](#block-system-guide)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## ✨ Features

- **🌍 Multilingual Support**: English and Spanish with easy locale management
- **📱 Responsive Design**: Mobile-first approach using Tailwind CSS
- **🧩 Block-Based CMS**: Flexible content blocks for building pages
- **⚡ Performance Optimized**: Next.js 15 with App Router for optimal performance
- **🎨 Modern UI**: Built with Radix UI components and Tailwind CSS
- **📊 SEO Ready**: Built-in meta tags and sitemap generation
- **🔐 Admin Dashboard**: Payload CMS admin interface for content management
- **📧 Contact Forms**: Built-in contact form with submissions management

## 🛠 Setup Instructions

### Local Development

#### Prerequisites

- **Node.js**: Version 18.20.2 or 20.9.0+
- **pnpm**: Version 9 or 10 (preferred package manager)
- **MongoDB**: Local instance or cloud database

#### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd nextis-website-with-payload-cms
```

#### 2. Install Dependencies

```bash
pnpm install
```

#### 3. Environment Setup

Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URI=mongodb://localhost:27017/restroworks

# Payload CMS
PAYLOAD_SECRET=your-32-character-secret-key-here

# Next.js
NEXT_PUBLIC_SERVER_URL=http://localhost:3000

# Optional: For cloud storage
# AWS_S3_BUCKET=your-bucket-name
# AWS_ACCESS_KEY_ID=your-access-key
# AWS_SECRET_ACCESS_KEY=your-secret-key
```

#### 4. Database Setup

**Local MongoDB**
```bash
# Install MongoDB locally
# Visit https://docs.mongodb.com/manual/installation/ for installation instructions
# Or use MongoDB Atlas cloud database (recommended for production)
```

#### 5. Start Development Server

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application.

#### 6. Admin Setup

1. Navigate to [http://localhost:3000/admin](http://localhost:3000/admin)
2. Create your first admin user
3. Start building your content!

### Vercel Deployment

#### 1. Database Setup

Set up a cloud MongoDB database:

**MongoDB Atlas (Recommended):**
1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get your connection string
4. Add your IP to the allowlist

#### 2. Deploy to Vercel

**Via Vercel Dashboard:**
1. Connect your GitHub repository to Vercel
2. Configure environment variables:
   ```env
   DATABASE_URI=mongodb+srv://username:password@cluster.mongodb.net/restroworks
   PAYLOAD_SECRET=your-production-secret-key-here
   NEXT_PUBLIC_SERVER_URL=https://your-app.vercel.app
   ```
3. Deploy!

**Via Vercel CLI:**
```bash
npm i -g vercel
vercel --prod
```

#### 3. Post-Deployment Setup

1. Visit your admin panel: `https://your-app.vercel.app/admin`
2. Create your admin user
3. Configure your header navigation and logo
4. Start creating pages!

## 🏗 CMS Architecture

### Design Philosophy

Our CMS architecture follows a **block-based content management** approach, providing maximum flexibility while maintaining consistency across the website.

### Core Collections

#### 1. **Pages Collection**
- **Purpose**: Main content pages with flexible layouts
- **Key Features**:
  - SEO-optimized with meta fields
  - Multilingual content support
  - Flexible block system for varied layouts
  - Status management (draft/published)
  - Unique slug generation for URLs

#### 2. **Media Collection**
- **Purpose**: Centralized asset management
- **Features**:
  - Automatic image optimization
  - Multiple size variants
  - Focal point selection
  - Alt text for accessibility

#### 3. **Users Collection**
- **Purpose**: Admin user management
- **Security**: Role-based access control

#### 4. **Contact Submissions**
- **Purpose**: Store and manage contact form submissions
- **Features**: Timestamped entries with admin review capabilities

### Global Configuration

#### Header Global
- **Centralized Navigation**: Manage site-wide navigation from one place
- **Multilingual Menus**: Different navigation for each language
- **CTA Integration**: Header call-to-action button management

### Why This Architecture?

1. **Scalability**: Easy to add new content types and blocks
2. **Consistency**: Reusable components ensure design consistency
3. **Flexibility**: Content creators can build unique page layouts
4. **Maintainability**: Centralized configuration reduces duplication
5. **Performance**: Optimized for Next.js static generation

## 📝 Creating & Editing Content

### Creating a New Page

1. **Access Admin**: Navigate to `/admin` and log in
2. **Create Page**: Go to Collections → Pages → Create New
3. **Basic Info**: Add title, slug, and optional content
4. **Add Blocks**: Use the flexible block system to build your layout
5. **SEO Setup**: Configure meta title, description, and social image
6. **Publish**: Set status to 'Published' and save

Your page will be available at `/[locale]/[slug]`

### Managing Multilingual Content

- Use the language selector in admin to switch between English/Spanish
- Translate localized fields for each language
- Images and non-localized content are shared across languages

## 🧩 Block System

The CMS uses a flexible block-based system with the following available blocks:
- **Hero**: Page headers with call-to-action buttons
- **Features**: Showcase services/benefits in grid layout
- **Testimonials**: Customer reviews and social proof
- **CTA Section**: Focused call-to-action areas
- **Contact Form**: Lead generation forms

Blocks can be mixed and matched to create unique page layouts.

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── (payload)/               # Payload CMS routes
│   │   ├── admin/              # Admin interface
│   │   └── api/                # API endpoints
│   ├── [locale]/               # Internationalized routes
│   │   ├── [slug]/            # Dynamic page routes
│   │   ├── layout.tsx         # Locale layout
│   │   └── page.tsx           # Homepage
│   └── api/                    # Additional API routes
├── blocks/                      # CMS Block definitions
│   ├── Hero.ts                 # Hero block schema
│   ├── Features.ts             # Features block schema
│   ├── Testimonials.ts         # Testimonials block schema
│   ├── CTASection.ts           # CTA section schema
│   ├── ContactForm.ts          # Contact form schema
│   └── CTAButton.ts            # Reusable button schema
├── collections/                 # Payload Collections
│   ├── Pages/                  # Pages collection
│   ├── Media.ts                # Media/uploads collection
│   ├── Users.ts                # User management
│   └── ContactSubmissions/     # Contact form submissions
├── components/                  # React Components
│   ├── blocks/                 # Block components
│   │   ├── BlockRenderer.tsx   # Block routing component
│   │   ├── HeroBlock.tsx       # Hero block component
│   │   ├── FeaturesBlock.tsx   # Features block component
│   │   ├── TestimonialBlock.tsx # Testimonials component
│   │   ├── CTASection.tsx      # CTA section component
│   │   └── ContactFormBlock.tsx # Contact form component
│   ├── ui/                     # UI components
│   ├── Header.tsx              # Site header
│   └── LanguageSwitcher.tsx    # Language toggle
├── globals/                     # Global configurations
│   └── Header.ts               # Header global schema
├── lib/                        # Utility functions
│   ├── utils.ts                # General utilities
│   ├── locales.ts              # Internationalization config
│   ├── getGlobalData.ts        # Global data fetching
│   └── generateSitemap.ts      # Sitemap generation
├── middleware.ts               # Next.js middleware
├── payload.config.ts           # Payload CMS configuration
└── payload-types.ts            # Generated TypeScript types
```

### Key Files Explained

- **`payload.config.ts`**: Main Payload CMS configuration
- **`middleware.ts`**: Handles internationalization routing
- **`BlockRenderer.tsx`**: Routes block data to appropriate components
- **`payload-types.ts`**: Auto-generated TypeScript types from CMS schema

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes**
4. **Test thoroughly**
5. **Commit your changes**: `git commit -m 'Add amazing feature'`
6. **Push to the branch**: `git push origin feature/amazing-feature`
7. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Add TypeScript types for new features
- Test your changes in both languages
- Update documentation for new blocks or features

## 📞 Support

- **Documentation**: [Payload CMS Docs](https://payloadcms.com/docs)
- **Community**: [Payload Discord](https://discord.com/invite/payload)
- **Issues**: [GitHub Issues](https://github.com/your-repo/issues)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ using Next.js and Payload CMS**
