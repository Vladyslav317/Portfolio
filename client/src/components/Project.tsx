function Projects() {
  const projects = [
    {
      title: 'Shopify App',
      description:
        'A Shopify e-commerce app with checkout extensions, a merchant UI, and an analytics platform.',
      tech: [
        'Node.js',
        'NestJS',
        'React',
        'TypeScript',
        'MongoDB',
        'Prisma',
        'Redis',
        'Preact',
        'Shopify',
        'BigQuery',
      ],
      features: [
        'Built checkout and thank-you extensions with Preact and Shopify APIs.',
        'Built merchant-facing interface modules and analytics dashboards with React and TypeScript.',
        'Queried GCP BigQuery datasets with SQL and used that data in the analytics app.',
        'Synced analytical events from cart drawers, modal popups, and product bundles into MongoDB.',
        'Moved heavy analytics aggregations to scheduled jobs and a Redis cache so the frontend stayed fast.',
      ],
    },
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
        'Jest',
      ],
      features: [
        'Applied Domain-Driven Design (DDD) and clean architecture for maintainability and scalability.',
        'Integrated PayTabs payment gateway for secure online transactions.',
        'Implemented email notifications and transactional messaging using Brevo.',
        'Designed REST APIs for booking management, authorization, and admin workflows.',
        'Improved system reliability with validation layers and structured error handling.',
        'Implemented unit and end-to-end (e2e) testing using Jest to ensure system stability and prevent regressions.',
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
        'Jest',
      ],
      features: [
        'Developed a custom AdminJS panel with React components for efficient user and group management.',
        'Implemented real-time chat using GetStream for instant communication.',
        'Integrated Customer.io for behavior-based email automation (onboarding, reminders, notifications).',
        'Built background job pipelines with Bull for notifications, scheduling, and data processing.',
        'Designed secure REST APIs and optimized database queries using Prisma and PostgreSQL.',
        'Added unit and integration tests with Jest to validate business logic and ensure reliable system behavior.',
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
        'Jest',
      ],
      features: [
        'Implemented image generation using StabilityAI API with configurable parameters.',
        'Integrated Printful API to automate product creation, order submission, tracking, and delivery.',
        'Built secure payment flow using Stripe with webhook handling for order lifecycle management.',
        'Developed scalable backend services in NestJS for sessions, orders, and third-party integrations.',
        'Optimized database performance using Prisma and PostgreSQL for handling user data and assets.',
        'Covered core flows with unit and integration tests using Jest to improve reliability and maintainability.',
      ],
    },
  ];

  return (
    <section
      id='projects'
      className='min-h-screen px-4 py-16 text-gray-900 dark:text-white sm:px-6 md:px-8 lg:px-10'
    >
      <div className='mx-auto max-w-[1600px]'>
        <h2 className='mb-8 text-center text-4xl font-bold'>
          Featured <span className='text-[#6366F1]'>Projects</span>
        </h2>
        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
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
