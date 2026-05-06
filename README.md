# Full Stack Portfolio

A modern, responsive portfolio website built with React, Node.js, Express, and MongoDB. This project showcases my skills, projects, and experience as a full-stack developer.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, modern interface built with Tailwind CSS
- **Project Showcase**: Dynamic project gallery with filtering capabilities
- **Skills Display**: Organized skills section with proficiency levels
- **Contact Form**: Functional contact form with email integration
- **Experience Timeline**: Visual timeline of work experience and education
- **About Section**: Personal information and social links
- **Admin Panel**: Backend API for managing portfolio content

## 🛠️ Tech Stack

### Frontend
- **React 19**: Modern React with hooks and functional components
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool and development server

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **CORS**: Cross-origin resource sharing

### Development Tools
- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixes

## 📁 Project Structure

```
Privotech/
├── Server/                 # Backend application
│   ├── Models/            # Database models
│   ├── Routes/            # API routes
│   ├── Middleware/        # Express middleware
│   ├── Controllers/       # Route controllers
│   ├── .env              # Environment variables
│   ├── index.js          # Server entry point
│   ├── package.json      # Dependencies
│   └── seed.js           # Database seed script
├── portfolio/             # Frontend application
│   ├── src/
│   │   ├── Components/   # React components
│   │   ├── Pages/        # Page components
│   │   ├── Hooks/        # Custom React hooks
│   │   ├── Services/     # API services
│   │   └── main.jsx      # App entry point
│   ├── public/           # Static assets
│   ├── .env              # Environment variables
│   ├── package.json      # Dependencies
│   └── vite.config.js    # Vite configuration
└── README.md             # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Privotech/Privotech.git
   cd Privotech
   ```

2. **Install backend dependencies**
   ```bash
   cd Server
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../portfolio
   npm install
   ```

4. **Set up environment variables**

   **Backend (.env)**:
   ```env
   # Server Configuration
   PORT=5000
   NODE_ENV=development

   # Database Configuration
   MONGODB_URI=mongodb://localhost:27017/portfolio

   # CORS Configuration
   FRONTEND_URL=http://localhost:5173

   # Email Configuration (optional)
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password

   # Security
   JWT_SECRET=your-super-secret-jwt-key
   BCRYPT_ROUNDS=12
   ```

   **Frontend (.env)**:
   ```env
   # API Configuration
   VITE_API_URL=http://localhost:5000/api

   # Environment
   VITE_NODE_ENV=development
   ```

5. **Start MongoDB**
   ```bash
   # If using local MongoDB
   mongod
   ```

6. **Seed the database** (optional - adds sample data)
   ```bash
   cd Server
   node seed.js
   ```

7. **Start the development servers**

   **Backend**:
   ```bash
   cd Server
   npm run dev
   ```

   **Frontend** (in a new terminal):
   ```bash
   cd portfolio
   npm run dev
   ```

8. **Open your browser**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## 📝 Available Scripts

### Backend (Server/)
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `node seed.js` - Seed database with sample data

### Frontend (portfolio/)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 API Endpoints

### Projects
- `GET /api/portfolio/projects` - Get all projects
- `GET /api/portfolio/projects/:id` - Get single project
- `POST /api/portfolio/projects` - Create project (admin)
- `PUT /api/portfolio/projects/:id` - Update project (admin)
- `DELETE /api/portfolio/projects/:id` - Delete project (admin)

### Skills
- `GET /api/portfolio/skills` - Get all skills
- `POST /api/portfolio/skills` - Create skill (admin)

### About
- `GET /api/portfolio/about` - Get about information

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get contact submissions (admin)

### Health
- `GET /api/health` - Health check

## 🎨 Customization

### Adding Projects
1. Use the admin API endpoints or
2. Add directly to the database via MongoDB shell
3. Modify the `seed.js` file for sample data

### Styling
- Modify Tailwind CSS classes in components
- Update `src/index.css` for custom styles
- Configure `tailwind.config.js` for theme customization

### Environment Variables
- Copy `.env.example` to `.env` in both frontend and backend
- Update values according to your setup

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Set environment variables in the deployment platform

### Backend (Heroku/Railway/DigitalOcean)
1. Set environment variables
2. Deploy the Server directory
3. Ensure MongoDB is accessible (MongoDB Atlas recommended)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the package.json file for details.

## 📞 Contact

- Email: contact@example.com
- GitHub: https://github.com/Privotech
- LinkedIn: https://linkedin.com/in/yourprofile

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS team for the utility-first CSS framework
- MongoDB for the flexible database solution
- All open-source contributors who made this project possible
