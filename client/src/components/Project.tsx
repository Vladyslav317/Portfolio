function Projects() {
  const projects = [
    {
      title: 'Support Groups Platform',
      description:
        'Platform for managing support groups for parents and children with real-time communication and admin tools.',
      tech: [
        'Node.js',
        'NestJS',
        'TypeScript',
        'AdminJS',
        'Prisma',
        'PostgreSQL',
        'GetStream',
      ],
      features: [
        'Built a custom AdminJS admin panel with React pages.',
        'Implemented real-time chat using GetStream.',
        'Developed group and user management functionality.',
        'Implemented background jobs for notifications.',
      ],
    },
    {
      title: 'AI Image Generation & Print Platform',
      description:
        'B2C platform where users generate AI images and order printed versions delivered to their home.',
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
        'Integrated StabilityAI for AI image generation.',
        'Implemented Stripe payment processing.',
        'Integrated Printful for printing and shipping.',
        'Developed backend order processing services.',
      ],
    },
    {
      title: 'Backend Systems (CRM & Booking Platform)',
      description:
        'Development of backend services for internal CRM and booking systems.',
      tech: [
        'Node.js',
        'NestJS',
        'TypeScript',
        'Prisma',
        'PostgreSQL',
        'AdminJS',
        'Passkit Generator',
        'PayTabs',
        'Brevo',
      ],
      features: [
        'Implemented Apple Wallet and Google Wallet pass generation.',
        'Developed backend APIs for booking workflows.',
        'Integrated PayTabs payment gateway.',
        'Applied Domain-Driven Design and clean architecture.',
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
