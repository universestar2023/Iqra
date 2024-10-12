import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import SchoolIcon from '@mui/icons-material/School';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

const features = [
  {
    name: 'Self Assessment',
    description: 'Discover your interests and strengths with our comprehensive self-assessment tools. These tools help you identify your preferences and potential career paths.',
    icon: PlaylistAddCheckIcon,
  },
  {
    name: 'College and University Info',
    description: 'Get detailed information about various colleges and universities. Explore courses, admission criteria, and campus facilities to make informed decisions.',
    icon: SchoolIcon,
  },
  {
    name: 'Career Insights',
    description: 'Gain insights into different career fields, including trending and lesser-known options. Learn about job roles, required skills, and future prospects.',
    icon: LightbulbIcon,
  },
  {
    name: 'Academic Guidance',
    description: 'Receive expert guidance on academic choices, including course selection and study tips. Our resources help you achieve your educational goals.',
    icon: LocalLibraryIcon,
  },
];

export default function Features() {
  return (
    <div className="bg-indigo-100 py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-4xl font-bold text-stone-950">
            Supportive Features
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Explore tools and resources designed to help you navigate your educational and career choices. 
            From self-assessment to academic guidance, we have everything you need to succeed.
          </p>
        </div>
        <div className="mx-auto mt-6 max-w-2xl sm:mt-10 lg:mt-18 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-6 lg:max-w-none lg:grid-cols-2 lg:gap-y-14">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16 p-5 bg-white border border-gray-200 rounded-lg shadow-lg">
                <dt className="text-base font-semibold leading-7 text-gray-900 ml-6">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 m-8">
                    <feature.icon aria-hidden="true" className="h-4 w-4 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 ml-6 text-base leading-7 text-gray-700">{feature.description}</dd>
              </div>
            ))}
          </dl>
          <div className="flex justify-center mt-8">
            <button className="text-white bg-indigo-600 px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-900 transition duration-200">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
