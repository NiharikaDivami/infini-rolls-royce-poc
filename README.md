# Infinite Scroll POC

A modern perpendicular scrolling carousel built with Next.js 14, TypeScript, and SCSS. Features smooth scroll snapping, auto-playing videos, and an elegant UI.

## 🚀 Features

- **Perpendicular Scrolling**: Smooth vertical scroll with snap points
- **Auto-Play Videos**: Videos automatically play/pause based on visibility
- **TypeScript**: Fully typed for better development experience
- **SCSS Styling**: Modular and maintainable styling with SCSS
- **Next.js App Router**: Latest Next.js features with App Router
- **Custom Hooks**: Reusable hooks for scroll snap, intersection observer, and video playback
- **Responsive Design**: Works seamlessly on all devices

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Main landing page
│   ├── layout.tsx                # Root layout
│   └── globals.scss              # Global styles
│
├── components/
│   ├── carousel/
│   │   ├── PerpendicularCarousel.tsx    # Main carousel container
│   │   ├── CarouselSlide.tsx            # Individual slide component
│   │   ├── CarouselProgress.tsx         # Progress indicator
│   │   └── CarouselNavigation.tsx       # Navigation dots/arrows
│   │
│   ├── background/
│   │   └── FixedBackground.tsx          # Static background layer
│   │
│   └── video/
│       └── AutoPlayVideo.tsx            # Video player with auto-play logic
│
├── hooks/
│   ├── useScrollSnap.ts                 # Custom hook for scroll snap
│   ├── useIntersectionObserver.ts       # Custom hook for visibility
│   └── useVideoPlayback.ts              # Custom hook for video control
│
├── lib/
│   └── carouselConfig.ts                # Carousel configuration/settings
│
├── types/
│   └── carousel.types.ts                # TypeScript interfaces
│
└── styles/
    └── carousel.scss                     # Custom CSS animations
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization

### Adding New Slides

Edit [src/lib/carouselConfig.ts](src/lib/carouselConfig.ts) to add or modify slides:

```typescript
export const sampleSlides: CarouselSlideData[] = [
  {
    id: '1',
    title: 'Your Title',
    description: 'Your description',
    backgroundColor: '#667eea',
    videoUrl: 'path/to/video.mp4', // optional
    imageUrl: 'path/to/image.jpg', // optional
  },
  // Add more slides...
];
```

### Customizing Styles

All SCSS files are located in their respective component folders and can be customized:

- Carousel styles: `src/components/carousel/*.scss`
- Video styles: `src/components/video/AutoPlayVideo.scss`
- Background styles: `src/components/background/FixedBackground.scss`
- Global styles: `src/app/globals.scss`

## 📦 Build for Production

```bash
npm run build
npm run start
```

## 🧪 Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **SCSS** - Advanced CSS with variables and nesting
- **React Hooks** - Custom hooks for reusable logic
- **Intersection Observer API** - Visibility detection
- **Scroll Snap API** - Smooth scrolling experience

## 📝 License

MIT

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.# 
