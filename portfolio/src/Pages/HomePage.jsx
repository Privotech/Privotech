import { Link } from 'react-router-dom';
import { useProjects, useSkills, useAbout } from '../Hooks/useApi';

const HomePage = () => {
  const { data: projectsData, loading: projectsLoading } = useProjects({ featured: 'true', limit: 3 });
  const { data: skillsData, loading: skillsLoading } = useSkills({ featured: 'true', limit: 6 });
  const { data: aboutData } = useAbout();

  const featuredProjects = projectsData?.data || [];
  const featuredSkills = skillsData?.data || [];
  const about = aboutData?.data;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/myimg (1).png"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-dark-900/80 via-primary-900/60 to-secondary-900/80"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary-400/30 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-secondary-400/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-accent-400/25 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-primary-300/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Hero Content - Flex Layout (Text Left, Image Right) */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-80 min-h-screen">

            {/* Left Side - Text Content */}
            <div className="flex-1 lg:flex-initial lg:w-1/2 text-center lg:text-left">
              <div className="animate-fade-in-up">
                <div className="mb-8">
                  <div className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-lg rounded-full border border-white/50 mb-6">
                    <span className="flex items-center text-dark-800 text-sm font-medium">
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                      </svg>
                      Welcome to my portfolio
                    </span>
                  </div>
                </div>

                <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 text-shadow-xl">
                  <span className="text-gradient-hero">{about?.title || 'Oyegbile Privilege'}</span>
                </h1>

                <div className="mb-8">
                  <p className="text-2xl md:text-3xl text-white/90 font-light mb-4">
                    {about?.subtitle || 'Full Stack Software Developer'}
                  </p>
                  <p className="text-lg text-white/80 leading-relaxed">
                    {about?.description || 'Passionate about creating innovative solutions with modern technologies.'}
                  </p>
                </div>

                <div className="flex flex-row gap-4 justify-center lg:justify-start">
                  <Link to="/projects" className="btn-accent group">
                    <span className="flex items-center">
                      View My Work
                      <svg className="ml-2 w-8 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Link>
                  <Link to="/contact" className="btn-accent group">
                    <span className="flex items-center">
                      Get In Touch
                      <svg className="ml-2 w-8 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            {/* Right Side - Image */}
            <section className="py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="flex-1 lg:flex-initial lg:w-1/2">
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                      <div className="relative w-96 h-140 mx-auto lg:mx-0">
                        <img
                          src="/myimg (1).png"
                          alt="Profile"
                          className="w-full h-full object-cover rounded-2xl shadow-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-500/10 to-transparent rounded-2xl"></div>
                        {/* Gemini Logo Overlay */}
                        <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg">
                          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2L2 7v10c0 1.1.9 2 2h16c1.1 0 2-.9 2-2V9a2 2 0 00-2-2H2a2 2 0 00-2 2v10c0 1.1.9 2 2h16c1.1 0 2-.9 2-2V9a2 2 0 00-2-2H2zm16 0H4a2 2 0 00-2 2v10c0 1.1.9 2 2h16c1.1 0 2-.9 2-2V9a2 2 0 00-2-2H2zm-2 8v2c0-1.1-.9-2-2H4c-1.1 0-2 .9-2V8h16v2zm0 0h16v2H4z" fill="#4285F4" />
                            <path d="M12 6c-1.1 0-2 .9-2 2s-.9 2-2 2 .9 2 2 .9 2 2 .9 2 2zm0 4c-1.1 0-2 .9-2 2s.9 2 2 2 .9 2 2 .9 2 2 .9 2 2zm0 4c-1.1 0-2 .9-2 2s.9 2 2 2 .9 2 2 .9 2 2 .9 2 2zm0 4c-1.1 0-2 .9-2 2s.9 2 2 2 .9 2 2 .9 2 2 .9 2 2z" fill="#34A853" />
                            <path d="M8 12c0-1.1.9-2 2s-.9 2-2 2 .9 2 2 .9 2 2 .9 2 2 .9 2 2 .9 2 2z" fill="#EA4335" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-6">
                About Me
              </h2>
              <div className="prose max-w-none mb-8">
                <p className="text-lg text-dark-700 leading-relaxed mb-4">
                  Passionate software developer with expertise in modern web technologies and a strong foundation in both frontend and backend development. I love creating innovative solutions and turning complex problems into elegant, user-friendly applications.
                </p>
                <p className="text-lg text-dark-700 leading-relaxed">
                  With a keen eye for design and a commitment to clean, efficient code, I strive to deliver exceptional digital experiences that make a real impact.
                </p>
              </div>
              <Link to="/about" className="btn-primary group">
                <span className="flex items-center">
                  Learn More About Me
                  <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5-5m5 5H7" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-dark-600 max-w-2xl mx-auto">
              Explore my latest work and see how I bring ideas to life with modern technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsLoading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="card skeleton h-96"></div>
              ))
            ) : (
              featuredProjects.map((project, index) => (
                <div
                  key={project._id}
                  className="card-gradient group hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden rounded-t-2xl h-48">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-400 via-secondary-400 to-accent-400 opacity-80"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-6xl font-bold opacity-20">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.status === 'completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                        }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-dark-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-dark-600 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="badge-primary"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-sm text-dark-500">+{project.technologies.length - 3}</span>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <Link
                        to={`/projects/${project._id}`}
                        className="text-primary-600 hover:text-primary-800 font-semibold flex items-center group-hover:translate-x-1 transition-transform"
                      >
                        View Project
                        <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                      <div className="flex space-x-3">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-dark-500 hover:text-primary-600 transition-colors"
                          >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-dark-500 hover:text-primary-600 transition-colors"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="text-center mt-16">
            <Link to="/projects" className="btn-secondary group">
              <span className="flex items-center">
                View All Projects
                <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section >

      {/* Featured Skills */}
      < section className="py-24 bg-white" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4">
              Technical Expertise
            </h2>
            <p className="text-lg text-dark-600 max-w-2xl mx-auto">
              Proficient in modern web technologies with a focus on creating scalable and maintainable solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {skillsLoading ? (
              Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="text-center">
                  <div className="skeleton w-20 h-20 rounded-2xl mx-auto mb-4"></div>
                  <div className="skeleton h-4 w-16 mx-auto rounded"></div>
                </div>
              ))
            ) : (
              featuredSkills.map((skill, index) => (
                <div
                  key={skill._id}
                  className="text-center group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl mx-auto flex items-center justify-center text-white font-bold text-xl shadow-glow group-hover:scale-110 transition-transform duration-300">
                      {skill.name.charAt(0)}
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full">
                      {skill.proficiency}
                    </div>
                  </div>
                  <h3 className="font-bold text-dark-900 mb-1">{skill.name}</h3>
                  <p className="text-sm text-dark-600 capitalize">{skill.category}</p>
                </div>
              ))
            )}
          </div>

          <div className="text-center mt-16">
            <Link to="/skills" className="btn-accent group">
              <span className="flex items-center">
                Explore All Skills
                <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section >

      {/* Quick Stats */}
      < section className="py-16 section-gradient" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '25+', label: 'Projects Completed' },
              { number: '32', label: 'Technologies' },
              { number: '6', label: 'Happy Clients' },
              { number: '2', label: 'Years Experience' }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-dark-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Call to Action */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
          <Link
            to="/contact"
            className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Get In Touch
          </Link>
        </div>
      </section >

      {/* Skills Section */}
      <section className="py-24 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-dark-600 max-w-2xl mx-auto">
              Technical skills and technologies I work with to create amazing solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {['React', 'Node.js', 'TypeScript', 'TailwindCSS', 'MongoDB', 'Python', 'AWS'].map((skill, index) => (
              <div key={index} className="card group hover:scale-105 transition-transform duration-300">
                <div className="p-6">
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {skill.charAt(0)}
                  </div>
                  <h3 className="font-semibold text-dark-900 mb-1">{skill}</h3>
                  <p className="text-sm text-dark-600">Expert Level</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Testimonials Section */}
      <section className="py-24 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-dark-600 max-w-2xl mx-auto">
              What clients and colleagues say about working with me
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Project Manager",
                company: "Tech Corp",
                text: "Exceptional developer who delivers high-quality solutions on time. Great communication skills and attention to detail."
              },
              {
                name: "Michael Chen",
                role: "Senior Developer",
                company: "StartupXYZ",
                text: "Talented full-stack developer with deep expertise in React and Node.js. Always goes above and beyond to exceed expectations."
              },
              {
                name: "Emily Davis",
                role: "UX Designer",
                company: "Design Studio",
                text: "Creative and detail-oriented designer with excellent user-centered approach. Collaborates seamlessly with development team."
              }
            ].map((testimonial, index) => (
              <div key={index} className="card group hover:scale-105 transition-transform duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-600 font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-900 mb-1">{testimonial.name}</h4>
                      <p className="text-sm text-primary-600 mb-2">{testimonial.role}</p>
                      <p className="text-xs text-dark-500">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-dark-700 italic">"{testimonial.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
          <Link
            to="/contact"
            className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Get In Touch
          </Link>
        </div>
      </section >
    </div >
  );
};

export default HomePage;