import { serviceData, classServices } from "../data/Services/ServiceData";

const Services = () => {
  return (
    <main className="bg-linear-to-b from-gray-50 to-white min-h-screen py-16">
      <h1
        className="text-3xl sm:text-4xl font-bold text-center text-blue-500 "
        style={{ fontFamily: "'Caveat', cursive  " }}
      >
        Our Services
      </h1>

      {/* Classes grid (center aligned) */}
      <section className="mt-10 px-5 md:px-20">
        <h2
          className="text-2xl text-emerald-500 md:text-3xl font-semibold text-center"
          style={{ fontFamily: "'Caveat', cursive  " }}
        >
          Classes We Offer
        </h2>
        <div className="mt-6 flex flex-wrap justify-center items-center gap-8 md:gap-8">
          {classServices.map((item) => {
            const imgSrc = item.image || "/company.jpg";
            return (
              <div key={item.id} className="flex flex-col items-center">
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
              </div>
            );
          })}
        </div>
      </section>
      <div className="mt-12 px-5 md:px-20 space-y-16">
        {serviceData.map((item, idx) => {
          const imgSrc = item.image || item.icon || "/company.jpg";
          const isReversed = idx % 2 === 1; // alternate layout
          return (
            <section
              key={item.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center`}
            >
              {/* Image */}
              <div className={`${isReversed ? "md:order-2" : "md:order-1"}`}>
                <img
                  src={imgSrc}
                  alt={item.title}
                  className="w-full h-64 md:h-80 object-cover rounded-xl shadow-sm"
                />
              </div>

              {/* Text */}
              <div
                className={`${
                  isReversed ? "md:order-1" : "md:order-2"
                } bg-white rounded-xl p-6 md:p-8 shadow-md`}
              >
                <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                  {item.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
};

export default Services;
