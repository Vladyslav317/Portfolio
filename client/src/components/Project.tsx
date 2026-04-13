function Projects() {
  const projects = [
    {
      title: 'Booking Platform',
      description:
        'Backend-driven booking system for managing services, reservations, and payments with scalable architecture.',
      tech: [
        'Node.js',
        'NestJS',
        'TypeScript',
        'PostgreSQL',
        'Prisma',
        'PayTabs',
        'Brevo',
      ],
      features: [
        'Applied Domain-Driven Design (DDD) and clean architecture for maintainability and scalability.',
        'Integrated PayTabs payment gateway for secure online transactions.',
        'Implemented email notifications and transactional messaging using Brevo.',
        'Designed REST APIs for booking management, authorization, and admin workflows.',
        'Improved system reliability with validation layers and structured error handling.',
      ],
    },
    {
      title: 'Healthcare Diagnostic Platform',
      description:
        'Scalable platform focused on diagnosing conditions in children with real-time communication and automation.',
      tech: [
        'Node.js',
        'TypeScript',
        'AdminJS',
        'GetStream',
        'Bull',
        'Customer.io',
        'Prisma',
        'PostgreSQL',
        'AWS S3',
        'React',
        'Tailwind CSS',
      ],
      features: [
        'Developed a custom AdminJS panel with React components for efficient user and group management.',
        'Implemented real-time chat using GetStream for instant communication.',
        'Integrated Customer.io for behavior-based email automation (onboarding, reminders, notifications).',
        'Built background job pipelines with Bull for notifications, scheduling, and data processing.',
        'Designed secure REST APIs and optimized database queries using Prisma and PostgreSQL.',
      ],
    },
    {
      title: 'Image Generation & Print Platform',
      description:
        'B2C platform enabling users to generate images and order printed versions with automated fulfillment and delivery.',
      tech: [
        'Node.js',
        'NestJS',
        'TypeScript',
        'StabilityAI',
        'Stripe',
        'Printful',
        'Prisma',
        'PostgreSQL',
      ],
      features: [
        'Implemented image generation using StabilityAI API with configurable parameters.',
        'Integrated Printful API to automate product creation, order submission, tracking, and delivery.',
        'Built secure payment flow using Stripe with webhook handling for order lifecycle management.',
        'Developed scalable backend services in NestJS for sessions, orders, and third-party integrations.',
        'Optimized database performance using Prisma and PostgreSQL for handling user data and assets.',
      ],
    },
  ];

  return (
    <section
      id='projects'
      className='min-h-screen px-12 py-24 text-gray-900 dark:text-white'
    >
      <div className='mx-auto max-w-6xl'>
        <h2 className='mb-4 text-center text-4xl font-bold'>
          Featured <span className='text-[#6366F1]'>Projects</span>
        </h2>
        <p className='mb-16 text-center text-sm text-gray-600 dark:text-gray-400'>
          Recent projects I contributed to as a backend-focused developer.
        </p>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='flex flex-col rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-[#1f2937] dark:bg-[#111827]'
            >
              <h3 className='mb-3 text-xl font-semibold'>{project.title}</h3>
              <p className='mb-5 text-sm leading-relaxed text-gray-600 dark:text-gray-400'>
                {project.description}
              </p>
              <div className='mb-5 flex flex-wrap gap-2'>
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className='rounded-full bg-gray-200 px-3 py-1 text-xs text-gray-700 dark:bg-[#1f2937] dark:text-gray-300'
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className='mb-6 list-inside list-disc space-y-2 text-sm text-gray-600 dark:text-gray-400'>
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <p className='mt-auto border-t border-gray-200 pt-4 text-xs text-gray-500 dark:border-[#1f2937] dark:text-gray-500'>
                🔒 Details limited due to NDA agreements
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
