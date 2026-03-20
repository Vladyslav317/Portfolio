function Nav({ setDark, dark }: any) {
  return (
    <header className='fixed top-0 z-50 w-full border-b border-gray-200 bg-white/70 backdrop-blur-md dark:border-[#1f2937] dark:bg-[#0B0D17]/70'>
      <nav className='grid grid-cols-[auto_1fr_auto] items-center px-12 py-4'>
        <h1 className='text-lg font-semibold text-gray-900 dark:text-white'>
          Vladyslav <span className='text-[#6366F1]'>Portfolio</span>
        </h1>
        <ul className='flex items-center justify-center gap-12 text-sm text-gray-600 dark:text-gray-300'>
          <li>
            <a href='#home' className='transition hover:text-[#6366F1]'>
              Home
            </a>
          </li>
          <li>
            <a href='#about' className='transition hover:text-[#6366F1]'>
              About
            </a>
          </li>
          <li>
            <a href='#skills' className='transition hover:text-[#6366F1]'>
              Skills
            </a>
          </li>
          <li>
            <a href='#projects' className='transition hover:text-[#6366F1]'>
              Projects
            </a>
          </li>
          <li>
            <a href='#contact' className='transition hover:text-[#6366F1]'>
              Contact
            </a>
          </li>
        </ul>
        <div className='flex items-center gap-4'>
          <button
            onClick={() => setDark(!dark)}
            className='text-lg transition hover:scale-110'
          >
            {dark ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
