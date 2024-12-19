import { Book, Users, Briefcase, Heart, Microscope, Code2, Globe, Laptop } from 'lucide-react';

export default function JobInsights() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Job Insights for Various Streams</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        
        {/* Arts Stream */}
        <div className="bg-gray-800 border-gray-700 rounded-lg shadow-lg">
          <div className="p-4">
            <div className="flex items-center text-xl font-semibold">
              <Book className="mr-2 text-indigo-500" />
              Arts Stream
            </div>
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-400 mb-4">The Arts stream focuses on subjects like history, literature, and social sciences, offering a broad spectrum of career opportunities.</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Users className="mr-2 text-green-400" /> Teaching & Education
              </li>
              <li className="flex items-center">
                <Briefcase className="mr-2 text-yellow-400" /> Content Writing & Journalism
              </li>
              <li className="flex items-center">
                <Globe className="mr-2 text-blue-400" /> International Relations
              </li>
              <li className="flex items-center">
                <Heart className="mr-2 text-red-400" /> Social Work & NGOs
              </li>
            </ul>
          </div>
        </div>

        {/* Science Stream */}
        <div className="bg-gray-800 border-gray-700 rounded-lg shadow-lg">
          <div className="p-4">
            <div className="flex items-center text-xl font-semibold">
              <Microscope className="mr-2 text-green-500" />
              Science Stream
            </div>
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-400 mb-4">The Science stream offers a deep dive into subjects like physics, chemistry, and biology, paving the way for highly technical and research-based careers.</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Briefcase className="mr-2 text-yellow-400" /> Research & Development
              </li>
              <li className="flex items-center">
                <Laptop className="mr-2 text-blue-400" /> Software Engineering
              </li>
              <li className="flex items-center">
                <Heart className="mr-2 text-red-400" /> Healthcare & Medicine
              </li>
              <li className="flex items-center">
                <Users className="mr-2 text-green-400" /> Teaching & Education
              </li>
            </ul>
          </div>
        </div>

        {/* Commerce Stream */}
        <div className="bg-gray-800 border-gray-700 rounded-lg shadow-lg">
          <div className="p-4">
            <div className="flex items-center text-xl font-semibold">
              <Briefcase className="mr-2 text-orange-500" />
              Commerce Stream
            </div>
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-400 mb-4">The Commerce stream covers subjects like economics, accounting, and business studies, opening up opportunities in business, finance, and management.</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Briefcase className="mr-2 text-yellow-400" /> Finance & Banking
              </li>
              <li className="flex items-center">
                <Users className="mr-2 text-green-400" /> Human Resources
              </li>
              <li className="flex items-center">
                <Laptop className="mr-2 text-blue-400" /> Business Analytics
              </li>
              <li className="flex items-center">
                <Book className="mr-2 text-indigo-400" /> Teaching & Academics
              </li>
            </ul>
          </div>
        </div>

        {/* Medical Stream */}
        <div className="bg-gray-800 border-gray-700 rounded-lg shadow-lg">
          <div className="p-4">
            <div className="flex items-center text-xl font-semibold">
              <Heart className="mr-2 text-red-500" />
              Medical Stream
            </div>
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-400 mb-4">The Medical stream leads to careers in health, wellness, and clinical practice, covering fields such as surgery, nursing, and pharmaceuticals.</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Users className="mr-2 text-green-400" /> Healthcare Administration
              </li>
              <li className="flex items-center">
                <Heart className="mr-2 text-red-400" /> Clinical Medicine & Surgery
              </li>
              <li className="flex items-center">
                <Briefcase className="mr-2 text-yellow-400" /> Pharmacology & Research
              </li>
              <li className="flex items-center">
                <Book className="mr-2 text-indigo-400" /> Nursing & Care Services
              </li>
            </ul>
          </div>
        </div>

        {/* Engineering Stream */}
        <div className="bg-gray-800 border-gray-700 rounded-lg shadow-lg">
          <div className="p-4">
            <div className="flex items-center text-xl font-semibold">
              <Code2 className="mr-2 text-teal-500" />
              Engineering Stream
            </div>
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-400 mb-4">The Engineering stream offers a range of specializations in technology, design, and innovation, providing pathways for various technical careers.</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Laptop className="mr-2 text-blue-400" /> Software & Web Development
              </li>
              <li className="flex items-center">
                <Briefcase className="mr-2 text-yellow-400" /> Civil Engineering & Construction
              </li>
              <li className="flex items-center">
                <Code2 className="mr-2 text-teal-400" /> Robotics & Automation
              </li>
              <li className="flex items-center">
                <Users className="mr-2 text-green-400" /> Engineering Management
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
