# NucleusIOB

A modern, SEO-optimized Next.js website built with TypeScript, Tailwind CSS, and shadcn/ui components. Features dark/light theme support and follows best practices for development.

## 🚀 Features

- **Modern Design**: Clean, responsive design with dark/light theme support
- **SEO Optimized**: Built with Next.js 15 App Router and comprehensive SEO metadata
- **TypeScript**: Full TypeScript support for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **shadcn/ui**: Beautiful, accessible UI components
- **Best Practices**: ESLint, Prettier, Husky, and conventional commits
- **Performance**: Optimized for speed and Core Web Vitals

## 📁 Project Structure

```
nucleusIOB/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx          # About page
│   │   ├── contact/
│   │   │   └── page.tsx          # Contact page
│   │   ├── globals.css           # Global styles
│   │   ├── layout.tsx            # Root layout
│   │   ├── page.tsx              # Home page
│   │   ├── robots.ts             # Robots.txt
│   │   └── sitemap.ts            # Sitemap
│   ├── components/
│   │   ├── ui/                   # shadcn/ui components
│   │   ├── navigation.tsx        # Navigation component
│   │   ├── theme-provider.tsx    # Theme provider
│   │   └── theme-toggle.tsx      # Theme toggle
│   └── lib/
│       └── utils.ts              # Utility functions
├── public/                       # Static assets
├── .eslintrc.json               # ESLint configuration
├── .prettierrc                  # Prettier configuration
├── .lintstagedrc                # Lint-staged configuration
├── commitlint.config.js         # Commit message linting
└── package.json                 # Dependencies and scripts
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Theme**: next-themes
- **Code Quality**: ESLint, Prettier
- **Git Hooks**: Husky, lint-staged
- **Commits**: Conventional Commits

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nucleusIOB
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint errors
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting

## 🎨 Customization

### Theme Colors

The theme colors can be customized in `src/app/globals.css`. The project uses CSS custom properties for consistent theming.

### Adding New Pages

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file with proper metadata
3. Update the navigation in `src/components/navigation.tsx`
4. Add the route to `src/app/sitemap.ts`

### SEO Optimization

Each page includes:
- Proper metadata with title and description
- Open Graph tags for social sharing
- Structured data where applicable
- Semantic HTML structure

## 🔧 Development Tools

### Code Quality

- **ESLint**: TypeScript-aware linting with Next.js rules
- **Prettier**: Code formatting with consistent style
- **Husky**: Git hooks for pre-commit checks
- **lint-staged**: Run linters on staged files only

### Git Workflow

The project uses conventional commits. Commit messages should follow the format:
```
type(scope): description
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🌐 SEO Features

- **Meta Tags**: Comprehensive meta tags for all pages
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific meta tags
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling instructions
- **Structured Data**: JSON-LD schema markup (where applicable)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, email hello@nucleusiob.com or visit our [contact page](/contact).

---

Built with ❤️ by the NucleusIOB team
