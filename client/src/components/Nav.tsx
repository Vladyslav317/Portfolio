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
            {open ? (
              <svg
                width='24px'
                height='24px'
                viewBox='0 0 24 24'
                fill={`${dark ? '#fff' : '#000'}`}
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z'
                />
              </svg>
            ) : (
              <svg
                width='24px'
                height='24px'
                viewBox='0 0 24 24'
                fill={`${dark ? '#fff' : '#000'}`}
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M20 7L4 7'
                  stroke={`${dark ? '#fff' : '#000'}`}
                  stroke-width='1.5'
                  stroke-linecap='round'
                />
                <path
                  d='M20 12L4 12'
                  stroke={`${dark ? '#fff' : '#000'}`}
                  stroke-width='1.5'
                  stroke-linecap='round'
                />
                <path
                  d='M20 17L4 17'
                  stroke={`${dark ? '#fff' : '#000'}`}
                  stroke-width='1.5'
                  stroke-linecap='round'
                />
              </svg>
            )}
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
