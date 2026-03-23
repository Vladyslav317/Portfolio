import { useState } from 'react';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');

      return;
    }

    setStatus('loading');

    try {
      const response = await fetch(
        'https://portfolio-backend-silk-six.vercel.app/api/contact/send-mail',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, message }),
        },
      );

      if (!response.ok) throw new Error('Network response not ok');

      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');

      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section
      id='contact'
      className='min-h-screen px-4 py-16 text-gray-900 dark:text-white sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-16'
    >
      <div className='mx-auto max-w-6xl'>
        <h1 className='mb-12 text-center text-3xl font-bold sm:mb-16 sm:text-4xl md:mb-20 md:text-5xl'>
          Get In <span className='text-[#6366F1]'>Touch</span>
        </h1>
        <div className='grid grid-cols-1 items-start gap-8 sm:gap-10 md:gap-12 lg:grid-cols-[1fr_1.5fr]'>
          <div>
            <h3 className='mb-6 text-lg font-semibold sm:mb-8 sm:text-xl'>
              Contact Information
            </h3>
            <div className='space-y-4 sm:space-y-5'>
              <a
                href='https://mail.google.com/mail/?view=cm&fs=1&to=vladyslav3177@gmail.com'
                target='_blank'
                className='flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4 transition-all duration-300 hover:border-[#6366F1] hover:shadow-md dark:border-[#1f2937] dark:bg-[#111827]'
              >
                <div className='rounded-lg bg-[#6366F1]/10 p-3 text-[#6366F1]'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='22'
                    height='22'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                  >
                    <rect width='20' height='16' x='2' y='4' rx='2'></rect>
                    <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'></path>
                  </svg>
                </div>
                <div className='truncate'>
                  <p className='text-xs text-gray-500 dark:text-gray-400 sm:text-sm'>
                    Email
                  </p>
                  <p className='truncate text-sm font-medium sm:text-base'>
                    vladyslav3177@gmail.com
                  </p>
                </div>
              </a>
              <a
                href='https://www.linkedin.com/in/vladyslav-kulakov-8b3043297/'
                target='_blank'
                className='flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4 transition-all duration-300 hover:border-[#6366F1] hover:shadow-md dark:border-[#1f2937] dark:bg-[#111827]'
              >
                <div className='rounded-lg bg-[#6366F1]/10 p-3 text-[#6366F1]'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='22'
                    height='22'
                    viewBox='0 0 24 24'
                    fill='#6366F1'
                  >
                    <path d='M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v14h-4V8zm7.5 0h3.6v1.9h.05c.5-.95 1.7-1.95 3.5-1.95 3.75 0 4.45 2.47 4.45 5.68V22h-4v-7.3c0-1.74-.03-3.98-2.43-3.98-2.43 0-2.8 1.9-2.8 3.85V22h-4V8z' />
                  </svg>
                </div>
                <div>
                  <p className='text-xs text-gray-500 dark:text-gray-400 sm:text-sm'>
                    LinkedIn
                  </p>
                  <p className='text-sm font-medium sm:text-base'>
                    Connect with me
                  </p>
                </div>
              </a>
              <a
                href='https://github.com/Vladyslav317'
                target='_blank'
                className='flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4 transition-all duration-300 hover:border-[#6366F1] hover:shadow-md dark:border-[#1f2937] dark:bg-[#111827]'
              >
                <div className='rounded-lg bg-[#6366F1]/10 p-3 text-[#6366F1]'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='22'
                    height='22'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 .5C5.73.5.75 5.48.75 11.75c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.52-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.3 1.18-3.11-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.19a10.9 10.9 0 0 1 5.74 0c2.19-1.5 3.15-1.19 3.15-1.19.62 1.59.23 2.77.11 3.06.73.81 1.18 1.85 1.18 3.11 0 4.43-2.69 5.41-5.26 5.69.41.35.77 1.04.77 2.1v3.11c0 .3.21.66.79.55a11.26 11.26 0 0 0 7.85-10.91C23.25 5.48 18.27.5 12 .5z' />
                  </svg>
                </div>
                <div>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>
                    GitHub
                  </p>
                  <p className='font-medium'>GitHub Profile</p>
                </div>
              </a>
              <a
                href='https://t.me/Vladyslav317'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4 transition-all duration-300 hover:border-[#6366F1] hover:shadow-md dark:border-[#1f2937] dark:bg-[#111827]'
              >
                <div className='rounded-lg bg-[#6366F1]/10 p-3 text-[#6366F1]'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='22'
                    height='22'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                  >
                    <path d='M9.04 15.47l-.38 5.36c.54 0 .77-.23 1.05-.5l2.52-2.41 5.22 3.82c.96.53 1.64.25 1.9-.89l3.44-16.12h.001c.3-1.39-.5-1.93-1.43-1.58L1.7 9.38c-1.36.53-1.34 1.29-.23 1.63l4.9 1.53L18.36 6.7c.57-.35 1.1-.16.67.19' />
                  </svg>
                </div>
                <div>
                  <p className='text-xs text-gray-500 dark:text-gray-400 sm:text-sm'>
                    Telegram
                  </p>
                  <p className='text-sm font-medium sm:text-base'>Message me</p>
                </div>
              </a>
            </div>
          </div>
          <div className='rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-[#1f2937] dark:bg-[#111827] sm:p-6 md:p-8'>
            <h3 className='mb-5 text-center text-xl font-semibold sm:mb-6 sm:text-2xl'>
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className='space-y-4 sm:space-y-5'>
              <div>
                <label className='mb-2 block text-xs font-medium text-gray-600 dark:text-gray-400 sm:text-sm'>
                  Your Name
                </label>
                <input
                  type='text'
                  className='w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm focus:border-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/20 dark:border-[#1f2937] dark:bg-[#0B0D17] sm:py-3 sm:text-base'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className='mb-2 block text-xs font-medium text-gray-600 dark:text-gray-400 sm:text-sm'>
                  Your Email
                </label>
                <input
                  type='email'
                  placeholder='email@example.com'
                  className='w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm focus:border-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/20 dark:border-[#1f2937] dark:bg-[#0B0D17] sm:py-3 sm:text-base'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className='mb-2 block text-xs font-medium text-gray-600 dark:text-gray-400 sm:text-sm'>
                  Your Message
                </label>
                <textarea
                  rows={4}
                  className='w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm focus:border-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/20 dark:border-[#1f2937] dark:bg-[#0B0D17] sm:py-3 sm:text-base'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <button
                type='submit'
                disabled={status === 'loading'}
                className='w-full rounded-lg bg-[#6366F1] py-2.5 text-sm text-white transition-all duration-300 hover:bg-[#4F46E5] hover:shadow-lg hover:shadow-indigo-500/30 disabled:opacity-50 sm:py-3 sm:text-base'
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className='text-center text-sm text-green-500'>
                  Message sent! ✅
                </p>
              )}
              {status === 'error' && (
                <p className='text-center text-sm text-red-500'>
                  Something went wrong
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
