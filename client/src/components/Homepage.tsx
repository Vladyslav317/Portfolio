function Homepage() {
  return (
    <main
      id='home'
      className='flex min-h-[calc(100vh-64px)] items-center justify-center px-4 text-gray-900 dark:text-white sm:px-6 md:px-10 lg:px-16'
    >
      <div className='max-w-3xl space-y-4 text-center sm:space-y-6'>
        <h1 className='animate-[fadeUp_1s_ease-out_forwards] text-3xl font-bold leading-tight opacity-0 sm:text-4xl md:text-5xl lg:text-6xl'>
          Hi, I'm <span className='text-[#6366F1]'>Vladyslav Kulakov</span>
        </h1>
        <p className='animate-[fadeUp_1s_ease-out_0.5s_forwards] text-base text-gray-700 opacity-0 dark:text-gray-400 sm:text-lg md:text-xl'>
          Full-Stack Developer specializing in{' '}
          <span className='font-medium text-[#6366F1]'>Node.js</span>
        </p>
        <div className='flex animate-[fadeUp_1s_ease-out_1s_forwards] flex-col items-center justify-center gap-3 pt-4 opacity-0 sm:flex-row sm:gap-4'>
          <a
            href='#projects'
            className='w-full rounded-xl bg-[#6366F1] px-6 py-3 font-medium text-white transition hover:scale-105 hover:bg-[#4F46E5] sm:w-auto'
          >
            View Projects
          </a>
          <a
            href='#contact'
            className='w-full rounded-xl border border-gray-300 px-6 py-3 font-medium transition hover:scale-105 hover:border-[#6366F1] hover:text-[#6366F1] dark:border-gray-600 sm:w-auto'
          >
            Contact Me
          </a>
        </div>
      </div>
    </main>
  );
}

export default Homepage;
