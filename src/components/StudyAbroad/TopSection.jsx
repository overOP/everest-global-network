export function TopSection() {
  return (
    <section className="relative text-white h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-center bg-cover opacity-50"
        style={{
          backgroundImage:
            "url('https://www.applyboard.com/wp-content/uploads/2023/01/Quiz_-Which-Destination-Country-Should-I-Study-Abroad-In.png')",
        }}
      ></div>

      <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-blue-700 opacity-70"></div>

      {/* Content */}
      <div className="relative text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Study Abroad with Confidence
        </h1>
        <p
          className="max-w-2xl mx-auto mb-6 text-2xl text-blue-100"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          We guide you from university selection to visa approval for your dream
          destination.
        </p>
        <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold">
          Free Consultation
        </button>
      </div>
    </section>
  );
}
