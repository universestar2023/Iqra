import React from 'react';
import { Briefcase, Book, GraduationCap, Target, User, Lightbulb } from 'lucide-react';

const CareerDevelopmentRoadmap = () => {
    return (
        <div className="bg-gradient-to-r from-blue-300 to-indigo-100 text-white min-h-screen flex flex-col items-center justify-center p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-black mb-12">Career Development Roadmap</h1>

                {/* Roadmap Steps */}
                <div className="flex flex-wrap justify-center space-x-10">
                    {/* Step 1 */}
                    <div className="w-full sm:w-72 bg-white rounded-lg shadow-lg p-6 mb-8 text-center">
                        <div className="mb-4 text-blue-500">
                            <GraduationCap className="w-12 h-12 mx-auto" />
                        </div>
                        <h3 className="text-2xl font-semibold text-indigo-800">Education</h3>
                        <p className="text-gray-600 mt-2">
                            Complete your high school education with a focus on subjects that align with your future career path.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="w-full sm:w-72 bg-white rounded-lg shadow-lg p-6 mb-8 text-center">
                        <div className="mb-4 text-blue-500">
                            <Book className="w-12 h-12 mx-auto" />
                        </div>
                        <h3 className="text-2xl font-semibold text-indigo-800">Undergraduate Studies</h3>
                        <p className="text-gray-600 mt-2">
                            Enroll in a relevant undergraduate program based on your chosen field of interest (Arts, Science, Engineering, etc.).
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="w-full sm:w-72 bg-white rounded-lg shadow-lg p-6 mb-8 text-center">
                        <div className="mb-4 text-blue-500">
                            <Lightbulb className="w-12 h-12 mx-auto" />
                        </div>
                        <h3 className="text-2xl font-semibold text-indigo-800">Skill Development</h3>
                        <p className="text-gray-600 mt-2">
                            Focus on gaining practical skills through online courses, internships, and certifications to boost your expertise.
                        </p>
                    </div>

                    {/* Step 4 */}
                    <div className="w-full sm:w-72 bg-white rounded-lg shadow-lg p-6 mb-8 text-center">
                        <div className="mb-4 text-blue-500">
                            <Target className="w-12 h-12 mx-auto" />
                        </div>
                        <h3 className="text-2xl font-semibold text-indigo-800">Goal Setting</h3>
                        <p className="text-gray-600 mt-2">
                            Set clear career goals and create a roadmap to achieve them, focusing on your desired job role and field.
                        </p>
                    </div>

                    {/* Step 5 */}
                    <div className="w-full sm:w-72 bg-white rounded-lg shadow-lg p-6 mb-8 text-center">
                        <div className="mb-4 text-blue-500">
                            <User className="w-12 h-12 mx-auto" />
                        </div>
                        <h3 className="text-2xl font-semibold text-indigo-800">Networking</h3>
                        <p className="text-gray-600 mt-2">
                            Connect with industry professionals, attend workshops, and build a network to enhance job opportunities.
                        </p>
                    </div>

                    {/* Step 6 */}
                    <div className="w-full sm:w-72 bg-white rounded-lg shadow-lg p-6 mb-8 text-center">
                        <div className="mb-4 text-blue-500">
                            <Briefcase className="w-12 h-12 mx-auto" />
                        </div>
                        <h3 className="text-2xl font-semibold text-indigo-800">Job Search</h3>
                        <p className="text-gray-600 mt-2">
                            Start applying for jobs or internships in your field, tailoring your resume and cover letter for each position.
                        </p>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-12 text-center">
                    <h2 className="text-3xl font-semibold text-black">Ready to Start Your Career Journey?</h2>
                    <p className="text-lg text-gray-900 mt-4">Take the first step today and begin shaping your future in your chosen field. The possibilities are endless!</p>
                    <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300">
                        Start Your Journey
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CareerDevelopmentRoadmap;
