function About() {
  return (
    <section
      id='about'
      className='min-h-screen px-12 py-24 text-gray-900 dark:text-white'
    >
      <h1 className='mb-20 text-center text-4xl font-bold'>
        About <span className='text-[#6366F1]'>Me</span>
      </h1>
      <div className='grid grid-cols-2 gap-12'>
        <div className='mx-auto flex max-w-xl flex-col items-center justify-center text-center'>
          <h3 className='mb-6 text-2xl font-semibold'>
            Backend-Focused Node.js Developer
          </h3>
          <p className='mb-6 leading-relaxed text-gray-600 dark:text-gray-400'>
            With over 3 years of experience in web development, I specialize in
            building scalable and high-performance backend applications using
            JavaScript and TypeScript. My main expertise lies in Node.js, where
            I develop robust APIs and server-side systems using frameworks such
            as NestJS and Express.
          </p>
          <p className='mb-6 leading-relaxed text-gray-600 dark:text-gray-400'>
            I regularly work with databases like PostgreSQL and MongoDB and use
            Prisma ORM to design efficient data models and manage database
            access. I also have experience with Redis for caching and
            performance optimization.
          </p>
          <p className='leading-relaxed text-gray-600 dark:text-gray-400'>
            I also work with React and Tailwind CSS, allowing me to build
            full-stack applications and understand the full product lifecycle.
          </p>
          <div className='mt-10 flex gap-6'>
            <a
              href='#contact'
              className='rounded-lg bg-[#6366F1] px-6 py-3 text-white transition-all duration-300 hover:bg-[#4F46E5] hover:shadow-lg hover:shadow-indigo-500/30'
            >
              Get in Touch
            </a>
            <a
              href='/CV_Vladyslav_Kulakov.pdf'
              download
              className='rounded-lg border border-[#6366F1] px-6 py-3 text-[#6366F1] transition-all duration-300 hover:bg-[#6366F1]/10'
            >
              Download CV
            </a>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-6'>
          {[
            {
              title: 'Web Development',
              desc: 'Creating responsive websites and web applications.',
              icon: (
                <>
                  <polyline points='16 18 22 12 16 6' />
                  <polyline points='8 6 2 12 8 18' />
                </>
              ),
            },
            {
              title: 'Backend APIs',
              desc: 'Building scalable REST APIs with Node.js & NestJS.',
              icon: <path d='M4 6h16M4 12h16M4 18h16' />,
            },
            {
              title: 'Databases',
              desc: 'PostgreSQL, MongoDB and Prisma ORM.',
              icon: (
                <>
                  <ellipse cx='12' cy='5' rx='9' ry='3' />
                  <path d='M3 5v6c0 1.7 4 3 9 3s9-1.3 9-3V5' />
                </>
              ),
            },
            {
              title: 'Performance',
              desc: 'Redis, caching and optimization techniques.',
              icon: <path d='M3 12h3l3-9 4 18 3-9h5' />,
            },
          ].map((item, i) => (
            <div
              key={i}
              className='rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-[#1f2937] dark:bg-[#111827] dark:hover:border-[#6366F1]'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='mb-2 h-6 w-6 text-[#6366F1]'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                {item.icon}
              </svg>
              <h4 className='mb-1 font-semibold'>{item.title}</h4>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
