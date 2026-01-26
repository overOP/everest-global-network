import { Link } from "react-router-dom";
import { classServices } from "../../../data/Services/ServiceData";

export default function Japanese() {
  const otherClasses = classServices.filter(
    (item) => item.id !== "cls-japanese"
  );

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
              Everest Global Network offers focused, result‑oriented Japanese
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

      {/* Learn Japanese */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-5 md:px-20 mt-6">
        <div>
          <h2
            className="text-2xl text-emerald-500 md:text-3xl font-semibold text-center"
            style={{ fontFamily: "'Caveat', cursive  " }}
          >
            About Japanese Classes
          </h2>
          <p className="mt-4">
            Japanese language classes are designed to help learners acquire
            proficiency in speaking, reading, writing, and understanding
            Japanese. These classes typically cover various aspects of the
            language, including grammar, vocabulary, and cultural understanding.
            The focus is on effective communication skills and understanding of
            Japanese culture.
          </p>
        </div>
        <div>
          <img
            src="/services/classes/jpLanguage.png"
            alt="Japanese language learning"
            className="rounded-2xl shadow-xl mt-4 md:mt-0 mx-auto md:ml-auto"
          />
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
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
