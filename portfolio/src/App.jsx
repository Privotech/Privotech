import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import "./App.css";

// Lazy load pages for code splitting
const AboutPage = lazy(() => import("./Pages/AboutPage"));
const SkillsPage = lazy(() => import("./Pages/SkillsPage"));
const ProjectsPage = lazy(() => import("./Pages/ProjectsPage"));
const ExperiencePage = lazy(() => import("./Pages/ExperiencePage"));
const TestimonialsPage = lazy(() => import("./Pages/TestimonialsPage"));
const ContactPage = lazy(() => import("./Pages/ContactPage"));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center h-96 bg-white">
    <div className="text-center">
      <div className="loading-spinner mx-auto mb-4"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/about"
              element={
                <Suspense fallback={<PageLoader />}>
                  <AboutPage />
                </Suspense>
              }
            />
            <Route
              path="/skills"
              element={
                <Suspense fallback={<PageLoader />}>
                  <SkillsPage />
                </Suspense>
              }
            />
            <Route
              path="/projects"
              element={
                <Suspense fallback={<PageLoader />}>
                  <ProjectsPage />
                </Suspense>
              }
            />
            <Route
              path="/experience"
              element={
                <Suspense fallback={<PageLoader />}>
                  <ExperiencePage />
                </Suspense>
              }
            />
            <Route
              path="/testimonials"
              element={
                <Suspense fallback={<PageLoader />}>
                  <TestimonialsPage />
                </Suspense>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense fallback={<PageLoader />}>
                  <ContactPage />
                </Suspense>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
