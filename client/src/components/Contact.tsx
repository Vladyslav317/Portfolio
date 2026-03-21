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
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                  >
                    <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
                    <rect width='4' height='12' x='2' y='9'></rect>
                    <circle cx='4' cy='4' r='2'></circle>
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
