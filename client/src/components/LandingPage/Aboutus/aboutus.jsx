import React from 'react';
import Navbar1 from '../MainHome/navbar1.jsx';

const AboutUs = () => {
    return (
        <div className="bg-gradient-to-br from-blue-300 to-indigo-200 min-h-screen">
            <Navbar1 />
            <div className="max-w-3xl mx-auto my-12 p-6 border border-gray-300 rounded-lg bg-white shadow-lg">
                <h1 className="text-3xl font-bold text-center text-indigo-900 mb-4">About Us</h1>
                <div className="space-y-6">
                    <section>
                        <h3 className="text-xl font-semibold text-indigo-700">Our Vision</h3>
                        <p className="text-base text-gray-700 leading-relaxed mt-2">
                            Welcome to our platform! We are dedicated to providing the best resources and guidance for students to help them navigate their academic and career paths. Our mission is to empower students by offering personalized assessments, valuable feedback, and comprehensive information about various career options.
                        </p>
                    </section>
                    <section>
                        <p className="text-base text-gray-700 leading-relaxed mt-2">
                            Our team consists of experienced professionals who are passionate about education and career development. We believe that every student deserves access to the tools and knowledge they need to succeed. Through our platform, we aim to bridge the gap between education and the real world, providing students with the skills and insights they need to thrive. Thank you for choosing our platform. Together, let's shape a brighter future for all students!
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
