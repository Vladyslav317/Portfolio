export function Footer() {
  return (
    <footer className='mt-24 border-t border-gray-200 dark:border-[#1f2937]'>
      <div className='flex flex-col items-center justify-between gap-6 px-12 py-8 md:flex-row'>
        <div className='text-center text-sm text-gray-600 dark:text-gray-400 md:text-left'>
          © {new Date().getFullYear()} Vladyslav Kulakov. All rights reserved.
        </div>
        <a
          href='#home'
          className='rounded-full bg-[#6366F1]/10 p-3 text-[#6366F1] transition-all duration-300 hover:scale-110 hover:bg-[#6366F1]/20'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='m5 12 7-7 7 7'></path>
            <path d='M12 19V5'></path>
          </svg>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
