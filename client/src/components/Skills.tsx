import { useState } from 'react';
import { skillSvgs } from '../constants/skillSvgs';

const data = [
  { name: 'HTML/CSS', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },

  { name: 'Node.js', category: 'backend' },
  { name: 'Nest.js', category: 'backend' },
  { name: 'Express', category: 'backend' },
  { name: 'MongoDB', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'Prisma', category: 'backend' },
  { name: 'BullMQ', category: 'backend' },
  { name: 'Redis', category: 'backend' },

  { name: 'Vite', category: 'tools' },
  { name: 'GitHub', category: 'tools' },
  { name: 'GitLab', category: 'tools' },
  { name: 'Docker', category: 'tools' },
  { name: 'VS Code', category: 'tools' },
];

function Skills() {
  const [filter, setFilter] = useState('all');

  const filteredSkills =
    filter === 'all' ? data : data.filter((skill) => skill.category === filter);

  const buttonBase =
    'cursor-pointer rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium transition-all duration-300';

  const active = 'bg-[#6366F1] text-white shadow-md shadow-indigo-500/30';

  const inactive =
    'text-gray-600 hover:text-[#6366F1] dark:text-gray-400 dark:hover:text-white';

  return (
    <section
      id='skills'
      className='min-h-screen px-4 py-16 text-gray-900 dark:text-white sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-16'
    >
      <h1 className='mb-12 text-center text-3xl font-bold sm:mb-16 sm:text-4xl md:mb-20 md:text-5xl'>
        My <span className='text-[#6366F1]'>Skills</span>
      </h1>
      <div className='mb-10 flex flex-wrap items-center justify-center gap-3 sm:mb-12 sm:gap-4'>
        {['all', 'backend', 'frontend', 'tools'].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`${buttonBase} ${filter === type ? active : inactive}`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>
      <div className='mx-auto max-w-6xl'>
        <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 md:gap-6 lg:grid-cols-5'>
          {filteredSkills.map((skill, index) => {
            const Icon = skillSvgs[skill.name];

            return (
              <div
                key={index}
                className='group flex flex-col items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-gray-50 p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-[#1f2937] dark:bg-[#111827] dark:hover:border-[#6366F1] sm:gap-3 sm:p-5'
              >
                <div className='flex h-8 w-8 items-center justify-center transition-transform duration-300 group-hover:scale-110 sm:h-10 sm:w-10'>
                  {Icon && <Icon />}
                </div>
                <span className='text-xs font-medium text-gray-700 dark:text-gray-300 sm:text-sm'>
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
