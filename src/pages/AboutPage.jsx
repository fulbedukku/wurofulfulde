import React from 'react';
import { BookOpen, Users, Globe, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Mock Team Data ---
const teamMembers = [
  {
    name: "Abubakar Hassan",
    title: "Lead Developer & Linguist",
    bio: "A passionate full-stack developer and native Fulfulde speaker, dedicated to bridging technology and cultural preservation for future generations.",
    image: "https://placehold.co/300x300/6A7B8E/ffffff?text=Abubakar",
  },
  {
    name: "Nasiru Mannga",
    title: "Lead Linguist, Content Curator & Educator",
    bio: "An experienced educator focused on creating engaging learning materials, creating and collecting authentic Fulfulde songs, proverbs, and oral traditions.",
    image: "https://placehold.co/300x300/9C541D/ffffff?text=Nasiru",
  },
];

// --- Reusable Team Member Card Component ---
const TeamCard = ({ member }) => (
  <div className="bg-white p-6 shadow-xl rounded-xl transition transform hover:scale-[1.02] duration-300 flex flex-col items-center text-center border border-gray-100">
    <div className="w-32 h-32 mb-4">
        <img
          src={member.image}
          alt={member.name}
          className="rounded-full w-full h-full object-cover border-4 border-blue-600 shadow-lg"
          // Fallback image in case the placeholder fails
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x300/A0AEC0/ffffff?text=User" }}
        />
    </div>
    <h3 className="text-xl font-extrabold text-gray-900 mb-1">{member.name}</h3>
    <p className="text-blue-700 font-semibold mb-3 text-sm">{member.title}</p>
    <p className="text-gray-600 text-sm italic">{member.bio}</p>
  </div>
);

// --- Section 1: Mission and Language Importance ---
const MissionSection = () => (
  <div className="lg:col-span-1 p-6 md:p-10 lg:p-12 bg-blue-50 rounded-2xl shadow-inner flex flex-col justify-center">
    <div className="mb-6 flex items-center">
      <Globe className="w-8 h-8 text-blue-700 mr-3"/>
      <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
        Our Vision: Preserving Fulfulde
      </h2>
    </div>
    <p className="text-lg text-gray-700 leading-relaxed mb-6">
      <span className="font-extrabold text-blue-800">Fulfulde Home</span> is built on a deep commitment to cultural survival. Our application serves as a dedicated digital sanctuary for learning the **Fulfulde language**, along with celebrating its rich heritage through traditional songs, poetry, and storytelling.
    </p>
    <p className="text-lg text-gray-700 leading-relaxed mb-8 border-l-4 border-blue-600 pl-4 bg-blue-100 p-3 rounded-md">
      In regions like **Nigeria**, the pressure of globalization and dominant languages puts many indigenous tongues, including Fulfulde, at risk. We believe that technology is a powerful tool to prevent this cultural erosion. By making learning accessible and engaging, we aim to ensure that this beautiful language thrives and is passed down to every generation.
    </p>
    {/* <div className="space-y-4">
        <div className="flex items-start text-gray-800">
            <BookOpen className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <p className="ml-3">Interactive lessons and vocabulary builders.</p>
        </div>
        <div className="flex items-start text-gray-800">
            <Users className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <p className="ml-3">A community platform for practice and discussion.</p>
        </div>
    </div> */}
  </div>
);

// --- Section 2: Team Introduction ---
const TeamSection = () => (
  <div className="lg:col-span-1 p-6 md:p-10 lg:p-12 bg-gray-50 rounded-2xl">
    <div className="flex items-center mb-10">
      <Users className="w-8 h-8 text-gray-700 mr-3"/>
      <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
        Meet the Dedicated Team
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {teamMembers.map((member, index) => (
        <TeamCard key={index} member={member} />
      ))}
    </div>
  </div>
);


export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      
      

      {/* Main Content Sections */}
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Header and Introduction */}
      <header className="bg-blue-800 text-white py-16 px-4 sm:px-6 lg:px-8 shadow-xl">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg uppercase tracking-widest opacity-80 mb-2 flex items-center justify-center">
            <Globe className="w-4 h-4 mr-2" /> Our Story
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            A Home for the Fulfulde Language
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
            We are leveraging digital tools to ensure the rich cultural heritage of Fulfulde endures.
          </p>
        </div>
      </header>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Section 1: Mission */}
          <MissionSection />
          
          {/* Section 2: Team */}
          <TeamSection />
          
        </div>
      </main>

      {/* Call to Action Footer (Optional but good for completeness) */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Join Our Journey</h3>
          <p className="mb-6 text-gray-300">
            Every learner is a guardian of the language. Start your Fulfulde learning today!
          </p>
          <Link to ="/learn">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-500 transition duration-300 transform hover:scale-105">
            Explore Lessons
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
          </Link>
        </div>
      </footer>
      
    </div>
  )
}
