# Portfolio - Xyryl Aranza

A modern, responsive portfolio website showcasing my skills, projects, and professional experience as a Full Stack Developer.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Xyryllium/portfolio)

## 🚀 Features

- ⚡️ Built with React Router and TypeScript
- 🎨 Modern UI with TailwindCSS
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive design
- 🎯 Smooth scrolling navigation
- 💼 Project showcase with GitHub integration
- 📄 Resume download functionality
- 🔍 SEO optimized with Open Graph tags
- ⚙️ Tech stack carousel
- 📅 Timeline for experience and education

## 🛠️ Tech Stack

- **Framework:** React Router
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **UI Components:** Custom components with shadcn/ui
- **Build Tool:** Vite
- **Deployment:** Vercel

## 📦 Installation

Install dependencies:

```bash
npm install
```

## 🏃‍♂️ Development

Start the development server:

```bash
npm run dev
```

Your portfolio will be available at `http://localhost:5173`.

## 🏗️ Building for Production

Create a production build:

```bash
npm run build
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect React Router and deploy

### Environment Variables

No environment variables required for basic deployment.

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── components/          # Reusable components
│   │   ├── icons/          # SVG icon components
│   │   ├── projects/       # Project showcase components
│   │   ├── tech-stack/     # Tech stack carousel
│   │   ├── timeline/       # Timeline components
│   │   └── ui/             # UI components (shadcn/ui)
│   ├── contexts/           # React contexts (Theme)
│   ├── data/               # Static data (projects, timeline, tech stack)
│   ├── routes/             # Route components
│   └── portfolio/          # Main portfolio component
├── public/
│   ├── img/                # Images
│   └── resume.pdf          # Resume file
└── README.md
```

## 🎨 Customization

### Update Personal Information

1. **Contact Info:** Edit `app/components/Contact.tsx`
2. **Projects:** Edit `app/data/projectsData.ts`
3. **Timeline:** Edit `app/data/timelineData.ts`
4. **Tech Stack:** Edit `app/data/techStackData.ts`
5. **SEO Meta Tags:** Edit `app/routes/home.tsx`

### Add Resume

Place your resume PDF at `public/resume.pdf`

### Add Project Images

Add project screenshots to `public/img/projects/`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

- **Email:** xyaranzaaa@gmail.com
- **LinkedIn:** [Xyryl Gyver Aranza](https://linkedin.com/in/xyryl-gyver-aranza)
- **GitHub:** [@Xyryllium](https://github.com/Xyryllium)
- **Website:** [xyrylaranza.dev](https://xyrylaranza.dev)

---

Built with ❤️ using React Router and TailwindCSS
