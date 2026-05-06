# Frontend-Only Portfolio

A modern, responsive portfolio website built entirely with React and static data. No backend required!

## 🚀 Features

- **Fully Frontend**: Works completely independently without any backend
- **Static Data**: All portfolio content is stored in JavaScript files
- **Responsive Design**: Works perfectly on all devices
- **Modern UI**: Clean, modern interface built with Tailwind CSS
- **Project Showcase**: Dynamic project gallery with filtering
- **Skills Display**: Organized skills section with proficiency levels
- **Contact Form**: Functional contact form (stores in localStorage)
- **Experience Timeline**: Visual timeline of work experience and education
- **About Section**: Personal information and social links

## 🛠️ Tech Stack

### Frontend Only
- **React 19**: Modern React with hooks and functional components
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool and development server
- **LocalStorage**: For contact form submissions

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── Components/         # React components
│   │   ├── Navbar.jsx     # Navigation component
│   │   └── Footer.jsx     # Footer component
│   ├── Pages/            # Page components
│   │   ├── HomePage.jsx   # Home page
│   │   ├── AboutPage.jsx  # About page
│   │   ├── SkillsPage.jsx # Skills page
│   │   ├── ProjectsPage.jsx # Projects page
│   │   ├── ExperiencePage.jsx # Experience page
│   │   └── ContactPage.jsx # Contact page
│   ├── data/             # Static data files
│   │   ├── projects.js   # Project data
│   │   ├── skills.js     # Skills data
│   │   └── about.js      # About data
│   ├── Hooks/            # Custom React hooks
│   │   └── useApi.js     # API simulation hooks
│   ├── Services/         # Services
│   │   └── api.js        # Static data service
│   └── main.jsx          # App entry point
├── public/               # Static assets
├── .env                  # Environment variables
├── package.json          # Dependencies
└── vite.config.js        # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Navigate to portfolio directory**
   ```bash
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to: http://localhost:5173

That's it! Your portfolio is now running without any backend requirements.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Adding Projects
Edit `src/data/projects.js`:
```javascript
export const projectsData = [
  {
    _id: 'unique-id',
    title: 'Your Project',
    description: 'Project description',
    technologies: ['React', 'Node.js'],
    featured: true,
    category: 'web',
    status: 'completed',
    // ... other fields
  }
];
```

### Adding Skills
Edit `src/data/skills.js`:
```javascript
export const skillsData = [
  {
    _id: 'unique-id',
    name: 'Your Skill',
    category: 'frontend',
    proficiency: 'expert',
    yearsOfExperience: 5,
    featured: true
  }
];
```

### Updating Personal Info
Edit `src/data/about.js` to update your:
- Name and title
- Bio and description
- Experience and education
- Social links

### Styling
- Modify Tailwind CSS classes in components
- Update `src/index.css` for custom styles
- Configure `tailwind.config.js` for theme customization

## 📧 Contact Form

The contact form works without a backend by:
- Storing submissions in localStorage
- Logging submissions to console
- Showing success/error messages to users

To view submissions, check browser console or localStorage:
```javascript
// In browser console
JSON.parse(localStorage.getItem('contactSubmissions'))
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Run `npm run build`
2. Upload the `dist` folder
3. Deploy automatically

### Other Platforms
Any static hosting service works (GitHub Pages, Surge, etc.)

## 📱 Mobile Responsive

The portfolio is fully responsive and works perfectly on:
- Desktop computers
- Tablets
- Mobile phones

## 🔧 Environment Variables

Create `.env` file:
```env
# API Configuration (optional, for future backend integration)
VITE_API_URL=http://localhost:5000/api

# Environment
VITE_NODE_ENV=development
```

## 🎯 Features Included

- ✅ Home page with hero section
- ✅ About page with personal info
- ✅ Projects page with filtering
- ✅ Skills page with categories
- ✅ Experience timeline
- ✅ Contact form (frontend-only)
- ✅ Responsive navigation
- ✅ Footer with social links
- ✅ Smooth animations
- ✅ Loading states
- ✅ Error handling

## 🔄 Future Backend Integration

The codebase is structured to easily add a backend later:
- API service is ready for real endpoints
- Hooks are designed for async operations
- Data structure matches typical API responses

Simply replace the static data service with real API calls when ready!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you need help customizing your portfolio, feel free to reach out or check the code comments for guidance.
