import React from 'react';
import { Link } from 'react-router-dom';

const resources = [
  {
    title: 'Why Fulfulde?',
    color: 'bg-teal-600',
     image: 'assets/grammar.jpg', // replace with your image
    description:
      ' Why is Fulfulde important? Who speaks the langauge, and why would anyone want to learn it',
    level: 'Level: A1–B2',
    linkText: 'VIEW ALL IN LEARN ONLINE',
    link: '#',
  },
  {
    title: 'Pathways to Learning',
    color: 'bg-sky-600',
    image: 'assets/demngal_men.jpg',
    description:
      'We are going to explore different pathways to learning Fulfulde, including formal education, self-study, and community engagement.',
    level: 'Level: B1–C2',
    linkText: 'VIEW ALL IN WATCH & LISTEN',
    link: '#',
  },
  {
    title: 'Mythbusters',
    color: 'bg-amber-500',
    image: 'assets/grammar.jpg',
    description:
      'There are many myths and misconceptions about the Fulfulde language and its speakers. Let’s debunk some of the most common ones.',
    level: 'Suitable for all levels',
    linkText: 'VIEW ALL IN REFERENCE',
    link: '#',
  },
  {
    title: 'Course Finder',
    color: 'bg-rose-600',
    image: 'assets/demngal_men.jpg',
    description:
      'How do you learn Fulfulde? Why would you even want to? Isn’t it a dying language? Find answers to these questions and more.',
    level: 'Suitable for all levels',
    linkText: 'VIEW ALL IN HOW & WHY',
    link: '#',
  },
];

export const HowAndWhy = () => {
  return (
    <main>
    <section className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {resources.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <div className={`${item.color} text-white p-4 font-bold text-xl`}>
              {item.title}
            </div>
            <Link to={item.link}>
            {item.image && (
              <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
            )}
            </Link>
            <div className="p-5 text-gray-700">
              <p className="mb-4 text-sm">{item.description}</p>
              <p className="font-semibold text-sm text-gray-600 mb-2">{item.level}</p>
              <a
                href={item.link}
                className="text-xs font-bold text-current hover:underline uppercase tracking-wide"
              >
                {item.linkText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
    </main>
  );
};
