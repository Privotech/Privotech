// Import static data
import { projectsData } from '../data/projects.js';
import { skillsData } from '../data/skills.js';
import { aboutData } from '../data/about.js';
import { testimonialsData } from '../data/testimonials.js';

class StaticDataService {
  constructor() {
    this.projects = projectsData;
    this.skills = skillsData;
    this.about = aboutData;
    this.testimonials = testimonialsData;
  }

  // Simulate API delay for realistic UX
  async delay(ms = 300) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Projects
  async getProjects(params = {}) {
    await this.delay();
    let filteredProjects = [...this.projects];
    
    if (params.featured === 'true') {
      filteredProjects = filteredProjects.filter(project => project.featured);
    }
    
    if (params.category) {
      filteredProjects = filteredProjects.filter(project => project.category === params.category);
    }
    
    if (params.limit) {
      filteredProjects = filteredProjects.slice(0, parseInt(params.limit));
    }

    return {
      success: true,
      count: filteredProjects.length,
      data: filteredProjects
    };
  }

  async getProject(id) {
    await this.delay();
    const project = this.projects.find(p => p._id === id);
    
    if (!project) {
      throw new Error('Project not found');
    }

    return {
      success: true,
      data: project
    };
  }

  // Skills
  async getSkills(params = {}) {
    await this.delay();
    let filteredSkills = [...this.skills];
    
    if (params.category) {
      filteredSkills = filteredSkills.filter(skill => skill.category === params.category);
    }
    
    if (params.featured === 'true') {
      filteredSkills = filteredSkills.filter(skill => skill.featured);
    }

    return {
      success: true,
      count: filteredSkills.length,
      data: filteredSkills
    };
  }

  // About
  async getAbout() {
    await this.delay();
    return {
      success: true,
      data: this.about
    };
  }

  // Testimonials
  async getTestimonials() {
    await this.delay();
    return {
      success: true,
      count: this.testimonials.length,
      data: this.testimonials.sort((a, b) => new Date(b.date) - new Date(a.date))
    };
  }

  // Contact (Frontend-only - simulate submission)
  async submitContact(contactData) {
    await this.delay();
    
    // In a real app, this would send to a backend
    // For frontend-only, we'll just simulate success and store in localStorage
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    const newSubmission = {
      ...contactData,
      _id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      status: 'unread'
    };
    submissions.push(newSubmission);
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
    
    console.log('Contact form submitted:', newSubmission);
    
    return {
      success: true,
      message: 'Contact form submitted successfully',
      data: newSubmission
    };
  }

  async getContacts(params = {}) {
    await this.delay();
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    
    let filteredSubmissions = [...submissions];
    
    if (params.status) {
      filteredSubmissions = filteredSubmissions.filter(sub => sub.status === params.status);
    }
    
    const page = parseInt(params.page) || 1;
    const limit = parseInt(params.limit) || 10;
    const start = (page - 1) * limit;
    const paginatedSubmissions = filteredSubmissions.slice(start, start + limit);

    return {
      success: true,
      count: paginatedSubmissions.length,
      total: filteredSubmissions.length,
      pages: Math.ceil(filteredSubmissions.length / limit),
      currentPage: page,
      data: paginatedSubmissions
    };
  }
}

export const staticDataService = new StaticDataService();
export default staticDataService;
