# QuickHire Frontend

A modern, responsive job portal web application built with React, TypeScript, and Tailwind CSS.

## Features

- Modern and responsive UI design
- Job listings with search and filter
- Job categories with hover effects
- Featured jobs section
- Latest jobs section
- Job application form
- Company showcase section
- Mobile-first responsive design

## Tech Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn UI, Radix UI
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Routing:** React Router DOM

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

The application will be available at `http://localhost:5173/`

## Project Structure

```
src/
├── components/
│   └── ui/              # Reusable UI components
├── screens/
│   └── ElementLandingPage/
│       └── sections/    # Page sections
│           ├── NavigationHeaderSection/
│           ├── CompaniesSection/
│           ├── JobCategoriesSection/
│           ├── JobPostingCtaSection/
│           ├── HeroSearchSection/
│           ├── LatestJobsSection/
│           └── FooterSection/
└── index.tsx
```

## Key Sections

### Navigation Header
- Logo and branding
- Navigation links
- Login/Sign up buttons
- Job search with location filter

### Companies Section
- Showcase of partner companies
- Grayscale logo display

### Job Categories
- 8 main categories (Design, Sales, Marketing, Finance, Technology, Engineering, Business, HR)
- Interactive hover effects
- Job count per category

### Featured Jobs
- Grid layout of featured job listings
- Company logos
- Job tags and categories
- Full-time/Part-time badges

### Latest Jobs
- Two-column layout
- Detailed job cards
- Company information
- Multiple category tags

### Job Posting CTA
- Call-to-action section
- Dashboard preview
- Sign up prompt

### Footer
- Company information
- Quick links
- Newsletter subscription
- Social media links

## Responsive Design

The application is fully responsive with breakpoints:
- Mobile: < 768px (1 column)
- Tablet: 768px - 1024px (2 columns)
- Desktop: > 1024px (4 columns)

## Styling

- Tailwind CSS for utility-first styling
- Custom color palette
- Consistent spacing and typography
- Smooth transitions and hover effects

## License

MIT
