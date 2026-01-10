import { countries } from "../../data/StudyAbroad/contriesdata";
import { FaArrowRight } from "react-icons/fa";

export const CountryGrid = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-3xl font-bold text-center mb-12 text-blue-500"
          style={{ fontFamily: "'Montserrat',sans-serif" }}
        >
          Where do you want to study?
        </h2>
        <p
          className="text-2xl font-bold text-center mb-12 text-blue-400
"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          We recommend you the Best College in best destination to build your
          carrer.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {countries.map((country) => (
            <div
              key={country.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={country.image}
                alt={country.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-5 flex items-center gap-4 group">
                <div>
                  <h3 className="text-xl font-semibold text-gray-600">
                    {country.name}
                  </h3>
                  <p className="text-gray-600 mt-1">{country.description}</p>
                </div>

                <div
                  className="ml-auto flex items-center justify-center w-10 h-10 rounded-full bg-white text-blue-400
                  group-hover:bg-gray-500 group-hover:text-white
                  transition-all duration-300"
                >
                  <FaArrowRight className="text-lg" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountryGrid;
