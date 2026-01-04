const Career = ({ image, title, alt }) => {
  return (
    <div className="max-w-sm bg-white rounded-xl border border-blue-200 shadow-md overflow-hidden transform transition-transform ">
      <div className="relative">
        <img
          src={image}
          alt={alt}
          className="w-full h-64 object-cover rounded-t-xl"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent rounded-t-xl"></div>
        <h2
          className="absolute top-4 left-4 text-white text-3xl font-extrabold drop-shadow-lg max-w-[80%]"
          aria-label={`Career title: ${title}`}
        >
          {title}
        </h2>
        <button
          className="absolute bottom-4 left-4 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-1 text-white px-6 py-2 rounded-2xl font-semibold transition-colors hover:scale-105 hover:shadow-lg"
          aria-label={`Read more about ${title}`}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default Career;
