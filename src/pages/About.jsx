const stats = [
  { value: "3.5", label: "Years Experience" },
  { value: "23", label: "Project Challenge" },
  { value: "830+", label: "Positive Reviews" },
  { value: "100K", label: "Trusted Students" },
];

const team = [
  {
    name: "Er. Shivang Dutta",
    role: "Chief Executive Officer",
    img: "/public/about/ceo.jpg",
    highlight: false,
  },
  {
    name: "Mr. Bibek Sharma",
    role: "Founder",
    img: "/public/about/founder.png",
    highlight: true,
  },
  {
    name: "Mr. Ravi Kishan Yadav",
    role: "Head of Admissions and Chief Coordinator",
    img: "/public/about/cc.png",
    highlight: false,
  },
  {
    name: "Linda Park",
    role: "Learning Coach",
    img: "/company.jpg",
    highlight: false,
  },
  {
    name: "Priya Patel",
    role: "Program Manager",
    img: "/company.jpg",
    highlight: false,
  },
  {
    name: "Ryan Lee",
    role: "Student Success",
    img: "/company.jpg",
    highlight: false,
  },
];

const About = () => {
  return (
    <main className="bg-slate-50 min-h-screen py-10">
      {/* Section 1: How It Started + Stats */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left - Story */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <p
              className="text-2xl text-emerald-500 md:text-3xl font-semibold text-center"
              style={{ fontFamily: "'Caveat', cursive  " }}
            >
              How It Started
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-medium text-slate-900">
              Our Dream is Global Learning Transformation
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Founded in ----, our company was born from a passion for making
              quality education accessible to all. What began as a small team of
              educators and technologists has grown into a dynamic organization
              dedicated to revolutionizing the way people learn. Our mission is
              to empower individuals with the knowledge and skills they need to
              succeed in a rapidly changing world.
            </p>
          </div>

          {/* Right - Image + Stats */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <img
                src="/company.jpg"
                alt="Team learning"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white rounded-xl p-5 shadow-sm"
                >
                  <div className="text-2xl font-bold text-slate-900">
                    {s.value}
                  </div>
                  <div className="text-sm text-slate-600">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Team Grid */}
      <section className="max-w-6xl mx-auto px-6 mt-16">
        <div className="flex items-center justify-between">
          <div>
            <p
              className="text-2xl text-emerald-500 md:text-3xl font-semibold text-center"
              style={{ fontFamily: "'Caveat', cursive  " }}
            >
              Meet the Team
            </p>
            <h2 className="mt-1 text-3xl sm:text-4xl font-medium text-slate-900">
              Meet Our Dedicated Team of Educators and Innovators
            </h2>
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((m) => (
            <div key={m.name} className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={m.img}
                  alt={m.name}
                  className={`w-full h-56 object-cover  `}
                />
              </div>
              <div className="mt-4">
                <p className="font-semibold text-slate-900">{m.name}</p>
                <p className="text-sm text-slate-600">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Vision & Mission */}
      <section className="max-w-6xl mx-auto px-6 mt-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <p
              className="text-2xl text-emerald-500 md:text-3xl font-semibold text-center"
              style={{ fontFamily: "'Caveat', cursive  " }}
            >
              Our Vision
            </p>
            <h3 className="mt-2 text-2xl font-medium text-slate-900">
              Empowering Lives Through Education
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Our unwavering vision is to empower lives through accessible,
              high-quality education, fostering a global community of lifelong
              learners. We aim to inspire personal growth, drive innovation, and
              shape a brighter future for all.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <p
              className="text-2xl text-emerald-500 md:text-3xl font-semibold text-center"
              style={{ fontFamily: "'Caveat', cursive  " }} 
            >
              Our Mission
            </p>
            <h3 className="mt-2 text-2xl font-medium text-slate-900">
              Learning for All, Everywhere
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Our mission is to make learning accessible to everyone by
              delivering engaging, high-quality experiences. We strive to remove
              barriers, support curious minds, and enable learners worldwide to
              achieve their goals with clarity and confidence.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
