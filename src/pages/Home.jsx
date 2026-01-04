import Career from "../components/Home/Career";
import Earth from "../components/Home/Earth";
import Edge from "../components/Home/Edge";
import Hero from "../components/Home/Hero";
import Services from "../components/Home/Services";
import { careerData, homeData, servicesDara } from "../data/home/data";

const Home = () => {
  return (
    <main>
      <Hero />

      {/* Edge Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-16">
        <h1
          className="text-3xl sm:text-4xl font-bold text-center text-blue-400 mb-12"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          The Everest Global Edge
        </h1>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {homeData.map((feature, index) => (
            <Edge
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>
      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-16">
        <h1
          className="text-3xl sm:text-4xl font-bold text-center text-blue-400 mb-12"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          About Everest Global Network
        </h1>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <p
              className="text-center text-emerald-500 text-2xl mb-12"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              A premier educational consultancy in Nepal, dedicated to helping
              students achieve their academic and career aspirations.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Everest Global Network is Nepal's leading educational consultancy,
              dedicated to helping students achieve their dreams of studying
              abroad. With our commitment to transparency and personalized
              approach, we guide students through every step of their
              international education journey.
            </p>
            <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              Learn More
            </button>
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <img
              src="/company.jpg"
              alt="About Everest Global Network"
              className="w-full h-90 rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-16">
        <h1
          className="text-3xl sm:text-4xl font-bold text-center text-blue-500 mb-12"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          Our Services
        </h1>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {servicesDara.map((service) => (
            <Services
              key={service.id}
              text={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>
      {/* Career Counseling */}
      <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-12">
        <h1 className="text-2xl font-semibold text-center text-gray-900 mb-12">
          Career Counseling
        </h1>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-center">
            {careerData.map((career) => (
              <Career
                key={career.id}
                image={career.image}
                title={career.title}
                alt={career.title}
              />
            ))}
          </div>
        </div>
        <button
          aria-label="Explore more career counseling options"
          className="mt-10 mx-auto block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition duration-300"
        >
          Explore More Careers
        </button>
      </section>
      <Earth />
    </main>
  );
};

export default Home;
