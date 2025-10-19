import React from 'react';
import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';

const resources = [
  {
    title: 'Learn',
    color: 'bg-teal-600',
     image: 'assets/grammar.jpg', // replace with your image
    description:
      'Structured courses to learn Fulfulde online. Suitable for absolute beginners and beyond, all completely free.',
    level: 'Level: A1–B2',
    linkText: 'VIEW ALL IN LEARN ONLINE',
    link: 'learn',
  },
  {
    title: 'Watch & Listen',
    color: 'bg-sky-600',
    image: 'assets/demngal_men.jpg',
    description:
      'Audio and video recordings of Fulfulde, most with transcriptions and translations. Ideal to aid learning, or just sit back and enjoy.',
    level: 'Level: B1–C2',
    linkText: 'VIEW ALL IN WATCH & LISTEN',
    link: '#',
  },
  {
    title: 'Reference',
    color: 'bg-amber-500',
    image: 'assets/grammar.jpg',
    description:
      'To Add Reference materials, including a searchable dictionary with sound files, grammar guides, pronunciation help, and more.',
    level: 'Suitable for all levels',
    linkText: 'VIEW ALL IN REFERENCE',
    link: '#',
  },
  {
    title: 'How & Why?',
    color: 'bg-rose-600',
    image: 'assets/demngal_men.jpg',
    description:
      'How do you learn Fulfulde? Why would you even want to? Isn’t it a dying language? Find answers to these questions and more.',
    level: 'Suitable for all levels',
    linkText: 'VIEW ALL IN HOW & WHY',
    link: 'how-and-why',
  },
];

export const HomePage = () => {
  return (
    
   
    <main>

       {/* Header and Introduction */}
      <header className="bg-sky-600 text-white py-16 px-4 sm:px-6 lg:px-8 shadow-xl">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg uppercase tracking-widest opacity-80 mb-2 flex items-center justify-center">
            <Globe className="w-4 h-4 mr-2" /> Saare Fulfulde
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            A Home for the Fulfulde Language
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
            We are leveraging digital tools to ensure the rich cultural heritage of Fulfulde endures.
          </p>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
            We are leveraging digital tools to ensure the rich cultural heritage of Fulfulde endures.
          </p>
        </div>
      </header>

      
    <section className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {resources.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <div className={`${item.color} text-white p-4 font-bold text-xl`}>
              {item.title}
            </div>
            <Link to={item.link}>
            {item.image && (
              <img src={`${import.meta.env.BASE_URL}item.image`} alt={item.title} className="w-full h-40 object-cover" />
            )}
            </Link>
            <div className="p-5 text-gray-700">
              <p className="mb-4 text-sm">{item.description}</p>
              <p className="font-semibold text-sm text-gray-600 mb-2">{item.level}</p>
              <Link
                to={item.link}
                className="text-xs font-bold text-current hover:underline uppercase tracking-wide"
              >
                {item.linkText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
    </main>
  );
};
