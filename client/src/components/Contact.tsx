import { useState } from 'react';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, email, message);

    const response = await fetch('/api/contact/send-mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <section
      id='contact'
      className='min-h-screen px-12 py-24 text-gray-900 dark:text-white'
    >
      <div className='mx-auto max-w-5xl'>
        <h1 className='mb-20 text-center text-4xl font-bold'>
          Get In <span className='text-[#6366F1]'>Touch</span>
        </h1>
        <div className='grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.6fr]'>
          <div>
            <h3 className='mb-8 text-xl font-semibold'>Contact Information</h3>
            <div className='space-y-5'>
              <a
                href='https://mail.google.com/mail/?view=cm&fs=1&to=vladyslav3177@gmail.com'
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
                <div>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>
                    Email
                  </p>
                  <p className='font-medium'>vladyslav3177@gmail.com</p>
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
                  <p className='text-sm text-gray-500 dark:text-gray-400'>
                    LinkedIn
                  </p>
                  <p className='font-medium'>Connect with me</p>
                </div>
              </a>
            </div>
          </div>
          <div className='rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-[#1f2937] dark:bg-[#111827]'>
            <h3 className='mb-6 text-center text-2xl font-semibold'>
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className='space-y-5'>
              <div>
                <label className='mb-2 block text-sm font-medium text-gray-600 dark:text-gray-400'>
                  Your Name
                </label>
                <input
                  type='text'
                  className='w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:border-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/20 dark:border-[#1f2937] dark:bg-[#0B0D17]'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className='mb-2 block text-sm font-medium text-gray-600 dark:text-gray-400'>
                  Your Email
                </label>
                <input
                  type='email'
                  placeholder='email@example.com'
                  className='w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:border-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/20 dark:border-[#1f2937] dark:bg-[#0B0D17]'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className='mb-2 block text-sm font-medium text-gray-600 dark:text-gray-400'>
                  Your Message
                </label>
                <textarea
                  rows={4}
                  className='w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:border-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/20 dark:border-[#1f2937] dark:bg-[#0B0D17]'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button
                type='submit'
                className='w-full rounded-lg bg-[#6366F1] py-3 text-white transition-all duration-300 hover:bg-[#4F46E5] hover:shadow-lg hover:shadow-indigo-500/30'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
