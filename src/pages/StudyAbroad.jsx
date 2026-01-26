import { useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { colleges, countries } from "../data/StudyAbroad/StudyAbroad";

const SectionTitle = ({ children }) => (
  <h2
    className="text-3xl sm:text-4xl font-bold text-center text-blue-500 mb-12"
    style={{ fontFamily: "'Caveat', cursive" }}
  >
    {children}
  </h2>
);

const StudyAbroad = () => {
  const scrollRef = useRef(null);

  const scrollByCards = (dir = 1) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const amount = card ? card.clientWidth + 24 : 320; // card width + gap
    el.scrollBy({ left: amount * dir, behavior: "smooth" });
  };

  return (
    <main className=" bg-slate-50 py-6">
      {/* Hero image box */}
      <section className="w-full lg:h-180 mx-auto px-6 mb-10">
        <div className="bg-white rounded-2xl shadow-sm ">
          <img
            src="/public/about/studyAbroad.png"
            alt="Study Abroad"
            className="w-screen lg:h-180 sm:h-80  rounded-2xl object-cover"
          />
        </div>
      </section>

      {/* Popular Colleges */}
      <SectionTitle>Popular Colleges</SectionTitle>
      <section className="max-w-6xl mx-auto px-6 mt-6 mb-16">
        <div className="relative">
          {/* Left/Right buttons */}
          <button
            aria-label="Previous"
            onClick={() => scrollByCards(-1)}
            className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 bg-slate-900 text-white rounded-full p-2 shadow"
          >
            <ChevronLeft />
          </button>
          <button
            aria-label="Next"
            onClick={() => scrollByCards(1)}
            className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 bg-slate-900 text-white rounded-full p-2 shadow"
          >
            <ChevronRight />
          </button>

          <div
            ref={scrollRef}
            className=" overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
          >
            <div className="grid grid-flow-col auto-cols-[80%] sm:auto-cols-[minmax(280px,1fr)] gap-6">
              {colleges.map((c) => (
                <a
                  key={c.name}
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  data-card
                  className="group block bg-white rounded-2xl overflow-hidden shadow-sm snap-start"
                >
                  <img
                    src={c.img}
                    alt={c.name}
                    className="h-40 sm:h-48 w-full object-contain group-hover:scale-105 transition-transform duration-300 ease-in-out "
                  />
                  <div />
                  <div className="p-4 flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-slate-900">{c.name}</p>
                      <p className="text-sm text-slate-600 mt-1">
                        {c.location}
                      </p>
                    </div>
                    <ArrowUpRight className="text-slate-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Countries */}
      <SectionTitle>where do you want to study</SectionTitle>
      <section className="max-w-6xl mx-auto px-6 mt-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((ct) => (
            <div
              key={ct.name}
              className="bg-white rounded-2xl overflow-hidden shadow-sm"
            >
              <img
                src={ct.img}
                alt={ct.name}
                className="h-40 w-full  object-cover"
              />
              <div />
              <div className="p-4">
                <p className="font-semibold text-slate-900">{ct.name}</p>
                <p className="text-sm text-slate-600 mt-1">{ct.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default StudyAbroad;
