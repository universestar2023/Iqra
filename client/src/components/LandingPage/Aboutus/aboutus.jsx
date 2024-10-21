import React from 'react';
import Navbar1 from '../MainHome/navbar1.jsx';

const AboutUs = () => {
    return (
        <div>
            <Navbar1 />
            <div className="max-w-3xl mx-auto my-12 p-5 border border-gray-300 rounded-lg bg-gray-50">
                <h1 className="text-2xl font-bold text-center mb-2">About Us</h1>
                <h3 className="text-xl font-semibold mt-4">Our Vision</h3>
                <p className="text-base leading-relaxed mt-2">
                    Welcome to our platform! We are dedicated to providing the best
                    resources and guidance for students to help them navigate their
                    academic and career paths. Our mission is to empower students by
                    offering personalized assessments, valuable feedback, and
                    comprehensive information about various career options.
                </p>
                <p className="text-base leading-relaxed mt-2">
                    Our team consists of experienced professionals who are passionate
                    about education and career development. We believe that every
                    student deserves access to the tools and knowledge they need to
                    succeed. Through our platform, we aim to bridge the gap between
                    education and the real world, providing students with the skills
                    and insights they need to thrive. Thank you for choosing our
                    platform. Together, let's shape a brighter future for all students!
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
