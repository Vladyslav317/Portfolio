function Homepage() {
  return (
    <main
      id='home'
      className='flex min-h-[calc(100vh-64px)] items-center justify-center px-6 text-gray-900 dark:text-white'
    >
      <div className='space-y-6 text-center'>
        <h1 className='animate-[fadeUp_1s_ease-out_forwards] text-5xl font-bold opacity-0 lg:text-6xl'>
          Hi, I'm Vladyslav Kulakov
        </h1>
        <p className='animate-[fadeUp_1s_ease-out_0.5s_forwards] text-lg text-gray-700 opacity-0 dark:text-gray-400'>
          Full-Stack Developer specializing in Node.js
        </p>
      </div>
    </main>
  );
}

export default Homepage;
