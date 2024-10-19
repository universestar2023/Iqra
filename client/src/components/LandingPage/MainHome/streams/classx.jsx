import React, { useState } from 'react';

const streamsData = [
  {
    stream: 'Arts',
    subjects: 'History, Geography, Political Science, Economics',
    eligibility: '10th Pass',
    duration: '2 Years',
    options: 'Bachelor of Arts (BA), Law, Civil Services, Journalism, Social Work',
    scope: 'Careers in Civil Services, Journalism, Law, Teaching, NGOs',
    exams: 'DUET, BHU UET, JNU Entrance',
    subjectDetails: 'History: Study of past events; Geography: Study of Earth’s landscapes; Political Science: Study of politics and governance; Economics: Study of wealth distribution.'
  },
  {
    stream: 'Science',
    subjects: 'Physics, Chemistry, Mathematics/Biology',
    eligibility: '10th Pass',
    duration: '2 Years',
    options: 'Engineering, Medical, B.Sc., Pharmacy, Biotechnology',
    scope: 'Careers in Engineering, Medicine, Research, IT, Pharmaceuticals',
    exams: 'JEE, NEET, State-level exams',
    subjectDetails: 'Physics: Study of matter and energy; Chemistry: Study of substances; Mathematics: Study of numbers and equations; Biology: Study of life.'
  },
  {
    stream: 'Commerce',
    subjects: 'Economics, Accountancy, Business Studies, Mathematics',
    eligibility: '10th Pass',
    duration: '2 Years',
    options: 'B.Com, Chartered Accountancy, Company Secretary, Finance, Business Management',
    scope: 'Careers in Banking, Finance, Accounting, Business Management, Entrepreneurship',
    exams: 'CA Foundation, CS Foundation, DU JAT, IPMAT',
    subjectDetails: 'Economics: Study of markets and economies; Accountancy: Financial transactions management; Business Studies: Study of business operations; Mathematics: Quantitative techniques for commerce.'
  },
  {
    stream: 'Diploma',
    subjects: 'Engineering, Hotel Management, Nursing, Paramedical courses',
    eligibility: '10th Pass',
    duration: '3 Years',
    options: 'Diploma in Engineering, Hospitality, Nursing, Medical Lab Technology, Fashion Design',
    scope: 'Careers in Technical fields, Healthcare, Hospitality, Design',
    exams: 'State Polytechnic Exams, NCHMCT for Hotel Management, AIIMS for Nursing',
    subjectDetails: 'Engineering: Technical and mechanical studies; Hotel Management: Hospitality and services; Nursing: Healthcare and patient care; Paramedical: Medical lab support and care.'
  }
];

const FilteredStreams = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedStream, setSelectedStream] = useState('All');
    const [selectedStreamsForComparison, setSelectedStreamsForComparison] = useState([]);
  
    const filteredStreams = streamsData.filter((stream) => {
      const matchesSearch = stream.stream.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStream = selectedStream === 'All' || stream.stream === selectedStream;
      return matchesSearch && matchesStream;
    });
  
    const handleStreamSelection = (stream) => {
      if (selectedStreamsForComparison.includes(stream)) {
        setSelectedStreamsForComparison(selectedStreamsForComparison.filter(s => s !== stream));
      } else {
        setSelectedStreamsForComparison([...selectedStreamsForComparison, stream]);
      }
    };
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-blue-100 p-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8 tracking-wide">
          Explore Streams After 10th
        </h1>
  
        {/* Search Bar */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search by stream..."
            className="p-3 border border-gray-300 rounded-lg shadow-md w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
  
        {/* Filtering Options */}
        <div className="flex justify-center mb-8 space-x-4">
          <button
            className={`px-6 py-3 rounded-lg shadow-md transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 ${selectedStream === 'All' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-100'}`}
            onClick={() => setSelectedStream('All')}
          >
            All
          </button>
          <button
            className={`px-6 py-3 rounded-lg shadow-md transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 ${selectedStream === 'Arts' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-100'}`}
            onClick={() => setSelectedStream('Arts')}
          >
            Arts
          </button>
          <button
            className={`px-6 py-3 rounded-lg shadow-md transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 ${selectedStream === 'Science' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-100'}`}
            onClick={() => setSelectedStream('Science')}
          >
            Science
          </button>
          <button
            className={`px-6 py-3 rounded-lg shadow-md transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 ${selectedStream === 'Commerce' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-100'}`}
            onClick={() => setSelectedStream('Commerce')}
          >
            Commerce
          </button>
          <button
            className={`px-6 py-3 rounded-lg shadow-md transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 ${selectedStream === 'Diploma' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-100'}`}
            onClick={() => setSelectedStream('Diploma')}
          >
            Diploma
          </button>
        </div>
  
        {/* Streams List with Selection */}
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-blue-500 text-white text-left text-lg">
                <th className="py-4 px-6">Select</th>
                <th className="py-4 px-6">Stream</th>
                <th className="py-4 px-6">Subjects</th>
                <th className="py-4 px-6">Eligibility</th>
                <th className="py-4 px-6">Duration</th>
              </tr>
            </thead>
            <tbody>
              {filteredStreams.map((stream, index) => (
                <tr key={index} className="border-b hover:bg-blue-100">
                  <td className="py-4 px-6">
                    <input
                      type="checkbox"
                      checked={selectedStreamsForComparison.includes(stream)}
                      onChange={() => handleStreamSelection(stream)}
                    />
                  </td>
                  <td className="py-4 px-6 text-gray-700">{stream.stream}</td>
                  <td className="py-4 px-6 text-gray-700">{stream.subjects}</td>
                  <td className="py-4 px-6 text-gray-700">{stream.eligibility}</td>
                  <td className="py-4 px-6 text-gray-700">{stream.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        {/* Compare Button */}
        <div className="flex justify-center mb-8">
          {selectedStreamsForComparison.length > 0 && (
            <button
              className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition transform hover:scale-105"
              onClick={() => console.log('Comparing Streams')}
            >
              Compare Selected Streams
            </button>
          )}
        </div>
  
        {/* Comparison Table */}
        {selectedStreamsForComparison.length > 0 && (
          <div className="overflow-x-auto mt-8">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Comparison of Selected Streams</h2>
            <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-500 text-white text-left text-lg">
                  <th className="py-4 px-6">Field</th>
                  {selectedStreamsForComparison.map((stream, index) => (
                    <th key={index} className="py-4 px-6">{stream.stream}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-4 px-6 font-bold">Subjects</td>
                  {selectedStreamsForComparison.map((stream, index) => (
                    <td key={index} className="py-4 px-6">{stream.subjects}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold">Eligibility</td>
                  {selectedStreamsForComparison.map((stream, index) => (
                    <td key={index} className="py-4 px-6">{stream.eligibility}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold">Duration</td>
                  {selectedStreamsForComparison.map((stream, index) => (
                    <td key={index} className="py-4 px-6">{stream.duration}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold">Options</td>
                  {selectedStreamsForComparison.map((stream, index) => (
                    <td key={index} className="py-4 px-6">{stream.options}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold">Scope</td>
                  {selectedStreamsForComparison.map((stream, index) => (
                    <td key={index} className="py-4 px-6">{stream.scope}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold">Exams</td>
                  {selectedStreamsForComparison.map((stream, index) => (
                    <td key={index} className="py-4 px-6">{stream.exams}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  };
  
  export default FilteredStreams;