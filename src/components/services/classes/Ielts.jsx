import { Link } from "react-router-dom";
import { classServices } from "../../../data/Services/ServiceData";

export default function Ielts() {
  const otherClasses = classServices.filter((item) => item.id !== "cls-ielts");

  return (
    <div className=" space-y-12">
      <section className="relative w-full">
        <div className="relative  sm:h-80 md:h-105 h-screen min-h-svh overflow-hidden">
          <img
            src="/services/classes/ielts_head.png"
            alt="IELTS class"
            className="absolute inset-0 h-full w-full object-cover object-center md:block "
          />

          {/* Overlay text box on the image, text left-aligned */}
          <div className="absolute right-6 md:left-10 top-20 md:top-15 max-w-xl rounded-2xl backdrop-blur-xs p-6 md:p-8">
            <h1
              className="text-3xl sm:text-4xl font-bold text-blue-500 text-left"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              About our classes
            </h1>
            <p className="mt-4 text-left text-base md:text-lg leading-relaxed text-black">
              Everest Global Network offers focused, result‑oriented IELTS
              classes to help you achieve your target band. We cover Listening,
              Reading, Writing, and Speaking with clear strategies, regular
              practice, and detailed feedback from experienced instructors
              following the latest exam patterns. Benefit from mock tests,
              time‑management techniques, and personalized guidance to
              strengthen weak areas and build confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Country score details: 3 square cards */}
      <section className="space-y-6">
        <h1
          className="text-3xl sm:text-4xl font-bold text-center text-blue-500"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          Required score as per country.
        </h1>

        <div className=" bg-linear-to-br from-gray-50 to-white p-6 md:p-10 ">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* USA */}
            <div className="relative h-56 sm:h-64 rounded-2xl border bg-white p-5 shadow-xl shadow-secondary">
              <img
                src="/carreer/us.jpg"
                alt="USA"
                className="absolute top-4 right-4 md:right-6 h-16 w-16 md:h-24 md:w-24 rounded-full ring  object-cover"
              />
              <p
                className="text-xl font-semibold text-gray-800"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                USA
              </p>
              <p className="mt-1 text-sm text-gray-700">Score: &gt;= 6.5</p>
              <p className="mt-4 md:mt-11 text-sm leading-relaxed text-gray-600">
                Typical undergraduate admission requires overall band 6.5 with
                some universities accepting 6.0. Component minimums may vary by
                program.
              </p>
            </div>

            {/* Australia */}
            <div className="relative h-56 sm:h-64 rounded-2xl border bg-white p-5 shadow-xl shadow-secondary">
              <img
                src="/carreer/australia.jpg"
                alt="Australia"
                className="absolute top-4 right-4 md:right-6 h-16 w-16 md:h-24 md:w-24 rounded-full ring  object-cover"
              />
              <p
                className="text-xl font-semibold text-gray-800"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                Australia
              </p>
              <p className="mt-1 text-sm text-gray-700">Score: &gt;= 6</p>
              <p className="mt-4 md:mt-11 text-sm leading-relaxed text-gray-600">
                Many courses expect overall 6.0–6.5. Check school and visa
                requirements for minimum band per module.
              </p>
            </div>

            {/* Europe */}
            <div className="relative h-56 sm:h-64 rounded-2xl border bg-white p-5 shadow-xl shadow-secondary">
              <img
                src="/carreer/germany.jpg"
                alt="Europe"
                className="absolute top-4 right-4 md:right-6 h-16 w-16 md:h-24 md:w-24 rounded-full ring  object-cover"
              />
              <p
                className="text-xl font-semibold text-gray-800"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                Europe
              </p>
              <p className="mt-1 text-sm text-gray-700">Score: &gt;= 5.5</p>
              <p className="mt-4 md:mt-11 text-sm leading-relaxed text-gray-600">
                Requirements differ by country and university. Many programs
                accept 5.5–6.0 with specific component thresholds.
              </p>
            </div>
            <div className="relative h-56 sm:h-64 rounded-2xl border bg-white p-5 shadow-xl shadow-secondary">
              <img
                src="/carreer/germany.jpg"
                alt="Europe"
                className="absolute top-4 right-4 md:right-6 h-16 w-16 md:h-24 md:w-24 rounded-full ring  object-cover"
              />
              <p
                className="text-xl font-semibold text-gray-800"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                UK
              </p>
              <p className="mt-1 text-sm text-gray-700">Score: &gt;= 5.5</p>
              <p className="mt-4 md:mt-11 text-sm leading-relaxed text-gray-600">
                Requirements differ by country and university. Many programs
                accept 5.5–6.0 with specific component thresholds.
              </p>
            </div>

            <div className="relative h-56 sm:h-64 rounded-2xl border bg-white p-5 shadow-xl shadow-secondary">
              <img
                src="/carreer/germany.jpg"
                alt="Europe"
                className="absolute top-4 right-4 md:right-6 h-16 w-16 md:h-24 md:w-24 rounded-full ring  object-cover"
              />
              <p
                className="text-xl font-semibold text-gray-800"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                Dubai
              </p>
              <p className="mt-1 text-sm text-gray-700">Score: &gt;= 5.5</p>
              <p className="mt-4 md:mt-11 text-sm leading-relaxed text-gray-600">
                Requirements differ by university. Many programs don't have
                strict score requirements but a 5.5–6.0 is often recommended.
              </p>
            </div>

            <div className="relative h-56 sm:h-64 rounded-2xl border bg-white p-5 shadow-xl shadow-secondary">
              <img
                src="/carreer/germany.jpg"
                alt="Europe"
                className="absolute top-4 right-4 md:right-6 h-16 w-16 md:h-24 md:w-24 rounded-full ring  object-cover"
              />
              <p
                className="text-xl font-semibold text-gray-800"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                China
              </p>
              <p className="mt-1 text-sm text-gray-700">Score: &gt;= 5.5</p>
              <p className="mt-4 md:mt-11 text-sm leading-relaxed text-gray-600">
                Requirements vary by institution. Many universities accept
                without IELTS or PTE scores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Language circles */}
      <section className="mt-10 px-5 md:px-20">
        <h2
          className="text-2xl text-emerald-500 md:text-3xl font-semibold text-center"
          style={{ fontFamily: "'Caveat', cursive  " }}
        >
          Classes We Offer
        </h2>
        <div className="mt-6 mb-6 flex flex-wrap justify-center items-center gap-8 md:gap-8">
          {otherClasses.map((item) => {
            const imgSrc = item.image || "/company.jpg";
            return (
              <Link
                key={item.id}
                to={item.path}
                className="flex flex-col items-center"
              >
                <div className="rounded-full shadow-xl shadow-secondary w-24 h-24 md:w-32 md:h-32 overflow-hidden border bg-white flex items-center justify-center hover:cursor-pointer hover:scale-105 transition-transform duration-300 hover:shadow-blue-300">
                  <img
                    src={imgSrc}
                    alt={item.title}
                    className="w-full h-full object-contain p-3"
                  />
                </div>
                <p className="mt-2 text-center text-sm md:text-base font-medium">
                  {item.title}
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
