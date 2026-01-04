const Hero = () => {
  return (
    <section className="relative w-full min-h-svh overflow-hidden">
      {/* Background Image */}
      <img
        src="/hero1.png"
        alt="Everest Global Network"
        className="absolute inset-0 w-full h-full object-cover object-center hidden md:block"
      />
      <img
        src="/Hero Section mobile design.png"
        alt="Everest Global Network"
        className="absolute inset-0 w-full h-full object-cover object-center md:hidden"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/5 to-black/20" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center md:justify-start min-h-svh px-4 sm:px-6 md:px-16">
        <div className="w-full max-w-2xl text-white text-center md:text-left">
          
          <h1 className="text-[1.9rem] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight sm:leading-tight md:leading-snug" >
            Welcome to{" "}
            <span className="block sm:inline text-blue-400">
              Everest Global Network
            </span>
          </h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed"  style={{ fontFamily: "'Caveat', cursive" }}>
            Connecting the world through innovation, reliability, and excellence
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
            <button className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-blue-500 hover:bg-blue-600 transition font-semibold text-base">
              Get Started
            </button>

            <button className="w-full sm:w-auto px-7 py-3.5 rounded-lg border border-white/80 hover:bg-white hover:text-black transition font-semibold text-base">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
