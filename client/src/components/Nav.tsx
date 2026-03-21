import { useState } from 'react';

function Nav({
  setDark,
  dark,
}: {
  setDark: (dark: boolean) => void;
  dark: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className='fixed top-0 z-50 w-full border-b border-gray-200 bg-white/70 backdrop-blur-md dark:border-[#1f2937] dark:bg-[#0B0D17]/70'>
      <nav className='grid grid-cols-[auto_1fr_auto] items-center px-4 py-3 sm:px-6 md:px-10 md:py-4 lg:px-16'>
        <h1 className='text-base font-semibold text-gray-900 dark:text-white sm:text-lg md:text-xl'>
          Vladyslav <span className='text-[#6366F1]'>Portfolio</span>
        </h1>
        <ul className='hidden items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-300 md:flex md:text-base lg:gap-10'>
          {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
            <li key={item}>
              <a href={`#${item}`} className='transition hover:text-[#6366F1]'>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex items-center justify-end gap-3 sm:gap-4'>
          <button
            onClick={() => setDark(!dark)}
            className='text-base transition hover:scale-110 sm:text-lg'
          >
            {dark ? '☀️' : '🌙'}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className='text-2xl transition md:hidden'
          >
            {open ? '✖' : '☰'}
          </button>
        </div>
      </nav>
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className='flex flex-col items-center gap-6 bg-white/90 py-6 text-gray-700 backdrop-blur-md dark:bg-[#0B0D17]/90 dark:text-gray-300'>
          {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => setOpen(false)}
                className='text-base transition hover:text-[#6366F1]'
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Nav;
