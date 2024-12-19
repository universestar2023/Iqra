import { Book, Briefcase, GraduationCap, Lightbulb, Microscope, Code, Stethoscope, Scale, Palette } from 'lucide-react'

const fields = [
  {
    name: "Computer Science",
    icon: <Code className="h-6 w-6" />,
    description: "Study the theory, design, development, and application of computer software and systems.",
    careers: ["Software Developer", "Data Scientist", "Cybersecurity Analyst"]
  },
  {
    name: "Engineering",
    icon: <Lightbulb className="h-6 w-6" />,
    description: "Apply scientific and mathematical principles to design and develop structures, machines, and systems.",
    careers: ["Mechanical Engineer", "Electrical Engineer", "Civil Engineer"]
  },
  {
    name: "Business",
    icon: <Briefcase className="h-6 w-6" />,
    description: "Learn about management, finance, marketing, and entrepreneurship in the corporate world.",
    careers: ["Business Analyst", "Marketing Manager", "Entrepreneur"]
  },
  {
    name: "Natural Sciences",
    icon: <Microscope className="h-6 w-6" />,
    description: "Explore the physical world through biology, chemistry, physics, and environmental science.",
    careers: ["Research Scientist", "Environmental Consultant", "Laboratory Technician"]
  },
  {
    name: "Medicine",
    icon: <Stethoscope className="h-6 w-6" />,
    description: "Study human health, diseases, and treatments to prepare for a career in healthcare.",
    careers: ["Doctor", "Nurse", "Medical Researcher"]
  },
  {
    name: "Law",
    icon: <Scale className="h-6 w-6" />,
    description: "Learn about legal systems, regulations, and practices to pursue a career in law.",
    careers: ["Lawyer", "Legal Consultant", "Paralegal"]
  },
  {
    name: "Arts and Humanities",
    icon: <Palette className="h-6 w-6" />,
    description: "Study literature, history, philosophy, and the arts to develop critical thinking and creativity.",
    careers: ["Writer", "Historian", "Curator"]
  }
]

export default function UndergraduateInfo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900 text-blue-50 p-8">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-bold mb-4 text-blue-100">Undergraduate Studies</h1>
        <p className="text-xl text-blue-200">Explore Your Future in Higher Education</p>
      </header>

      <section className="mb-12">
        <div className="bg-blue-800 border-blue-700 shadow-lg rounded-lg p-6">
          <div className="flex items-center text-2xl text-blue-100">
            <GraduationCap className="mr-2 text-blue-300" />
            <span>What is Undergraduate Education?</span>
          </div>
          <div className="text-blue-200 mt-4">
            <p>
              Undergraduate education is the first level of higher education pursuit after completing high school. 
              It typically leads to a bachelor's degree and provides a foundation of knowledge and skills in a 
              specific field of study. This educational journey usually takes 3-4 years to complete and offers 
              opportunities for personal growth, career preparation, and academic exploration.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-blue-100">Key Benefits of Undergraduate Studies</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[{
            title: "Career Preparation", description: "Gain skills and knowledge directly applicable to your chosen career path."
          }, {
            title: "Personal Growth", description: "Develop critical thinking, communication, and problem-solving abilities."
          }, {
            title: "Networking", description: "Build relationships with peers, professors, and industry professionals."
          }, {
            title: "Specialization", description: "Focus on a specific field of study and become an expert in your area of interest."
          }, {
            title: "Research Opportunities", description: "Engage in cutting-edge research and contribute to your field of study."
          }, {
            title: "Global Perspective", description: "Gain exposure to diverse cultures and ideas through international programs and exchanges."
          }].map((benefit, index) => (
            <div key={index} className="bg-blue-800 border-blue-700 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg p-6">
              <div className="text-xl text-blue-100">{benefit.title}</div>
              <div className="text-blue-200 mt-2">{benefit.description}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6 text-blue-100">Popular Undergraduate Fields</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {fields.map((field, index) => (
            <div key={index} className="bg-blue-800 border-blue-700 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg p-6">
              <div className="flex items-center text-xl text-blue-100">
                <span className="bg-blue-700 p-2 rounded-full mr-2">{field.icon}</span>
                <span>{field.name}</span>
              </div>
              <div className="text-blue-200 mt-4">
                <p>{field.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {field.careers.map((career, careerIndex) => (
                    <span key={careerIndex} className="bg-blue-600 text-blue-100 px-3 py-1 rounded-md text-sm">
                      {career}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-12 text-center text-blue-300">
        <p>Ready to start your undergraduate journey? Explore programs and find the perfect fit for your future!</p>
        <div className="mt-4 flex justify-center items-center">
          <Book className="mr-2" />
          <span className="space-x-4">
            <a href="#" className="hover:text-blue-100 transition-colors duration-300">Learn More</a>
            <a href="#" className="hover:text-blue-100 transition-colors duration-300">Apply Now</a>
            <a href="#" className="hover:text-blue-100 transition-colors duration-300">Contact Us</a>
          </span>
        </div>
      </footer>
    </div>
  )
}
